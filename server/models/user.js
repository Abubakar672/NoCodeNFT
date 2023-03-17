const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  collections: [
    {
      type: String,
      ref: "Collection",
    },
  ],
  nfts: [
    {
      type: String,
      ref: "Token",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
