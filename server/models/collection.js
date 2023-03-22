const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  collectionId: {
    type: String,
    unique: true,
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
  externalUrl: {
    type: String,
  },
  openseaVerificationStatus: {
    type: String,
  },
  description: {
    type: String,
  },
  sampleImages: { type: [String] },
  tokenCount: {
    type: Number,
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
  floorAsk: {
    id: { type: String },
    sourceDomain: { type: String },
    price: {
      currency: {
        contract: { type: String },
        name: { type: String },
        symbol: { type: String },
        decimals: { type: String },
      },
      amount: {
        raw: { type: String },
        decimal: { type: Number },
        usd: { type: Number },
        native: { type: Number },
      },
    },
    maker: { type: String },
    validFrom: { type: Number },
    validUntil: { type: Number },
    token: {
      contract: { type: String },
      tokenId: { type: String },
      name: { type: String },
      image: { type: String },
    },
  },
});

const Collection = mongoose.model("Collection", schema);

module.exports = Collection;
