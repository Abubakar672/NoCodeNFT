const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  txHash: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  price: {
    type: String,
  },
  eventType: {
    type: String,
  },
  buyHash: {
    type: String,
  },
  blockNumber: {
    type: String,
  },
  blockHash: {
    type: String,
  },
  logNumber: {
    type: String,
  },
  sellHash: {
    type: String,
  },
  sellerId: {
    type: String,
    required: true,
    ref: "Account",
  },
  collectionId: {
    type: String,
    required: true,
    ref: "Collection",
  },
  buyerId: {
    type: String,
    required: true,
    ref: "Account",
  },
  nftId: {
    type: String,
    required: true,
    ref: "Nft",
  },
});

const Sale = mongoose.model("Sale", Schema);

exports.Sale = Sale;
