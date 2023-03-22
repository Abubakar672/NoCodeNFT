const Collection = require("../models/collection");
const Token = require("../models/token");

module.exports = {
  collections: async function () {
    const collections = await Collection.find({});
    return collections;
  },
  collection: async function ({ id }) {
    const collection = await Collection.findOne({ collectionId: id });
    return collection;
  },
  tokens: async function ({ collectionId }) {
    const tokens = await Token.find({ collectionId: collectionId });
    return tokens;
  },
  token: async function ({ id }) {
    const token = await Token.findOne({ tokenId: id });
    return token;
  },
};
