require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cron = require("node-cron");
const app = express();
const cors = require("cors");
const winston = require("winston");

const errors = require("./middleware/errors");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const connectToDB = require("./config/db");
const logging = require("./config/logging");
const Collection = require("./models/collection");
const Token = require("./models/token");
const { default: axios } = require("axios");

app.use(cors());
app.use(errors);

require("./config/db")();

app.use(
  "/api",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);
let count = 0;
let timerId = null;

const insertToken = async (tokens) => {
  try {
    const tokensDocuments = tokens.map((token) => {
      let tokenData = {
        contract: token?.token?.contract,
        tokenId: token?.token?.tokenId,
        name: token?.token?.name,
        description: token?.token?.description,
        image: token?.token?.image,
        media: token?.token?.media,
        kind: token?.token?.kind,
        isFlagged: token?.token?.isFlagged,
        lastFlagUpdate: token?.token?.lastFlagUpdate,
        lastFlagChange: token?.token?.lastFlagChange,
        rarity: token?.token?.rarity,
        rarityRank: token?.token?.rarityRank,
        collectionId: token?.token?.collection?.id,
        lastBuy: token?.token?.lastBuy,
        lastSell: token?.token?.lastSell,
        owner: token?.token?.owner,
      };

      return Token.findOneAndUpdate({ tokenId: tokenData.tokenId }, tokenData, {
        upsert: true,
      });
    });
    await Promise.all(tokensDocuments);
    console.log("tokn updated");
  } catch (error) {
    console.log(error);
  }
};

const inertTokens = async () => {
  try {
    let count = 0;
    let timerId = null;
    const collections = await Collection.find();
    const collectionsIds = collections.map(
      (collection) => collection.collectionId
    );

    timerId = setInterval(async () => {
      try {
        if (count >= 20) {
          count = 0;
        }
        const id = collectionsIds[count];
        if (id) {
          const options = {
            method: "GET",
            url: `https://api-goerli.reservoir.tools/tokens/v5?collection=${collectionsIds[count]}&source=opensea.io&sortDirection=asc`,
            headers: { accept: "*/*", "x-api-key": "demo-api-key" },
          };
          count += 1;
          const result = await axios.request(options);
          insertToken(result.data.tokens);
        }
      } catch (error) {
        console.log(error);
      }
    }, 10000);
  } catch (error) {
    console.log(error);
  }
};

const insertCollections = async () => {
  try {
    const collectionOptions = {
      method: "GET",
      url: `https://api-goerli.reservoir.tools/collections/v5`,
      headers: { accept: "*/*", "x-api-key": "demo-api-key" },
    };
    const collectionsData = await axios.request(collectionOptions);
    const collectionDocuments = collectionsData.data.collections.map(
      (collection) => {
        let collectionData = {
          collectionId: collection?.id,
          name: collection?.name,
          slug: collection?.slug,
          image: collection?.image,
          banner: collection?.banner,
          externalUrl: collection?.externalUrl,
          openseaVerificationStatus: collection?.openseaVerificationStatus,
          description: collection?.description,
          sampleImages: collection?.sampleImages,
          tokenCount: collection?.tokenCount,
          onSaleCount: collection?.onSaleCount,
          primaryContract: collection?.primaryContract,
          tokenSetId: collection?.tokenSetId,
          collectionBidSupported: collection?.collectionBidSupported,
          contractKind: collection?.contractKind,
          rank: collection?.rank,
          volume: collection?.volume,
          volumeChange: collection?.volumeChange,
          floorSale: collection?.floorSale,
          floorSaleChange: collection?.floorSaleChange,
          floorAsk: collection?.floorAsk,
        };

        return Collection.findOneAndUpdate(
          { collectionId: collectionData.collectionId },
          collectionData,
          {
            upsert: true,
          }
        );
      }
    );
    await Promise.all(collectionDocuments);
    console.log("Collection updated");
  } catch (error) {
    console.log(error);
  }
};

const cronJob = async () => {
  try {
    await insertCollections();
    await inertTokens();
  } catch (error) {
    console.log(error);
  }
};
const port = process.env.PORT;

connectToDB()
  .then((conn) => {
    console.log(`MongoDB Connected`);
    app.listen(port, console.log(`Connected to Port ${port}.`));
    logging();
    cronJob();
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    winston.error(`Error: ${error.message}`);
  });
