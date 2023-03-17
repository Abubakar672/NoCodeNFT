const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  image: {
    type: String,
  },
  banner: {
    type: String,
  },
  discordUrl: {
    type: String,
  },
  externalUrl: {
    type: String,
  },
  twitterUsername: {
    type: String,
  },
  openseaVerificationStatus: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  sampleImages: { type: [String] },
  tokenCount: {
    type: String,
  },
  onSaleCount: {
    type: String,
  },
  primaryContract: {
    type: String,
  },
  tokenSetId: {
    type: String,
  },
  collectionBidSupported: {
    type: Boolean,
    default: false,
  },
  contractKind: {
    type: String,
  },
  rank: {
    "1day": { type: Number, alias: "_1day" },
    "7day": { type: Number, alias: "_7day" },
    "30day": { type: Number, alias: "_30day" },
    allTime: { type: Number },
  },
  volume: {
    "1day": { type: Number, alias: "_1day" },
    "7day": { type: Number, alias: "_7day" },
    "30day": { type: Number, alias: "_30day" },
    allTime: { type: Number },
  },
  volumeChange: {
    "1day": { type: Number, alias: "_1day" },
    "7day": { type: Number, alias: "_7day" },
    "30day": { type: Number, alias: "_30day" },
  },
  floorSale: {
    "1day": { type: Number, alias: "_1day" },
    "7day": { type: Number, alias: "_7day" },
    "30day": { type: Number, alias: "_30day" },
  },
  floorSaleChange: {
    "1day": { type: Number, alias: "_1day" },
    "7day": { type: Number, alias: "_7day" },
    "30day": { type: Number, alias: "_30day" },
  },
  lastBuy: { value: { type: String, default: null } },
  owner: {
    type: String,
    ref: "User",
  },
});

const Collection = mongoose.model("Collection", Schema);

module.exports = Collection;
