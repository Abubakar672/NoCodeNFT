const { Number } = require("mongodb");
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  slug: { type: String },
  createdAt: { type: Date },
  name: { type: String },
  image: { type: String },
  banner: { type: String },
  discordUrl: { type: String },
  externalUrl: { type: String },
  twitterUsername: { type: String },
  openseaVerificationStatus: { type: String },
  description: { type: String },
  sampleImages: { type: [String] },
  tokenCount: { type: String },
  onSaleCount: { type: String },
  primaryContract: { type: String },
  tokenSetId: { type: String },
  royalties: {
    type: {
      recipient: { type: String },
      breakdown: {
        type: [
          {
            bps: { type: Number, required: false },
            recipient: { type: String },
          },
        ],
      },
      bps: { type: Number },
    },
  },
  allRoyalties: {
    type: {
      eip2981: {
        type: [
          {
            bps: { type: Number },
            recipient: { type: String },
          },
        ],
      },
      onchain: {
        type: [
          {
            bps: { type: Number },
            recipient: { type: String },
          },
        ],
      },
      opensea: {
        type: [
          {
            bps: { type: Number },
            recipient: { type: String },
          },
        ],
      },
    },
  },
  lastBuy: {
    type: {
      value: { type: String, required: false },
    },
  },
  floorAsk: {
    type: {
      id: { type: String },
      sourceDomain: { type: String },
      price: {
        type: {
          currency: {
            type: {
              contract: { type: String },
              name: { type: String },
              symbol: { type: String },
              decimals: { type: Number },
            },
          },
          amount: {
            type: {
              raw: { type: String },
              decimal: { type: Number },
              usd: { type: Number },
              native: { type: Number },
            },
          },
        },
      },
      maker: { type: String },
      validFrom: { type: Number },
      validUntil: { type: Number },
      token: {
        type: {
          contract: { type: String },
          tokenId: { type: String },
          name: { type: String },
          image: { type: String },
        },
      },
    },
  },
  rank: {
    type: {
      "1day": { type: Number },
      "7day": { type: Number },
      "30day": { type: Number },
      allTime: { type: Number },
    },
  },
  volume: {
    type: {
      "1day": { type: Number },
      "7day": { type: Number },
      "30day": { type: Number },
      allTime: { type: Number },
    },
  },
  volumeChange: {
    type: {
      "1day": { type: Number },
      "7day": { type: Number },
      "30day": { type: Number },
    },
  },
  floorSale: {
    type: {
      "1day": { type: Number },
      "7day": { type: Number },
      "30day": { type: Number },
    },
  },
  floorSaleChange: {
    type: {
      "1day": { type: Number },
      "7day": { type: Number },
      "30day": { type: Number },
    },
  },
  collectionBidSupported: { type: Boolean },
  contractKind: { type: String },
});

const Collection = mongoose.model("Collection", Schema);

exports.Collection = Collection;
