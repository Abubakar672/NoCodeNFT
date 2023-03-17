const Collection = require("../models/collection");

module.exports = {
  collections: async function () {
    const collections = await Collection.find();
    return collections.map((collection) => {
      return {
        ...collection._doc,
        _id: collection._id.toString(),
      };
    });
  },

  updateCollection: async function ({ id, collectionInput }) {
    const collection = await Collection.findById(id);
    if (!collection) {
      throw new Error("Collection Not found!");
    }
    collection.name = collectionInput.name;

    const updatedCollection = await collection.save();
    return {
      ...updatedCollection._doc,
      _id: updatedCollection._id.toString(),
    };
  },
};
