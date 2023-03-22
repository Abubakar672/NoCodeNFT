const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  contract: { type: String, index: true, required: true },
  tokenId: { type: String, required: true, unique: true, index: true },
  name: { type: String },
  description: { type: String },
  image: { type: String },
  media: { type: String },
  kind: { type: String },
  isFlagged: { type: Boolean },
  lastFlagUpdate: { type: Date },
  lastFlagChange: { type: Date },
  rarity: { type: Number },
  rarityRank: { type: Number },
  collectionId: { type: String },
  lastBuy: {
    value: Number,
    timestamp: Number,
  },
  lastSell: {
    value: Number,
    timestamp: Number,
  },
  owner: { type: String },
});

const Token = mongoose.model("Token", schema);

module.exports = Token;
