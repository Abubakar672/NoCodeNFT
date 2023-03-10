const { Int32, Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  contract: { type: String },
  tokenId: { type: String },
  name: { type: String },
  description: { type: String },
  image: { type: String },
  media: { type: String },
  kind: { type: String },
  isFlagged: { type: Boolean },
  lastFlagUpdate: { type: Date },
  lastFlagChange: { type: String },
  rarity: { type: Int32 },
  rarityRank: { type: Int32 },
  collection: {
    type: {
      id: { type: String },
      name: { type: String },
      image: { type: String },
      slug: { type: String },
    },
  },
  lastBuy: {
    type: {
      value: { type: Int32 },
      timestamp: { type: Timestamp },
    },
  },
  lastSell: {
    type: {
      value: { type: Int32 },
      timestamp: { type: Timestamp },
    },
  },
  owner: { type: String },
});

const Nft = mongoose.model("Nft", Schema);

exports.Nft = Nft;
