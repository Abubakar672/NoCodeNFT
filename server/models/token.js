const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  contract: {
    type: String,
  },
  tokenId: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  media: {
    type: String,
    default: null,
  },
  kind: {
    type: String,
  },
  isFlagged: {
    type: Boolean,
    default: false,
  },
  lastFlagUpdate: {
    type: Date,
    default: Date.now(),
  },
  lastFlagChange: {
    type: Date,
    default: null,
  },
  rarity: {
    type: Number,
  },
  rarityRank: {
    type: Number,
  },
  lastBuy: {
    value: { type: Number, default: null },
    timestamp: { type: Date, default: null },
  },
  lastSell: {
    value: { type: Number, default: null },
    timestamp: { type: Date, default: null },
  },
  owner: {
    type: String,
    ref: "User",
  },
  collection: {
    type: String,
    ref: "Collection",
  },
});

const Token = mongoose.model("Token", Schema);

module.exports = Token;
