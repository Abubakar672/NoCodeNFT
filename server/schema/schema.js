const { default: axios } = require("axios");
const graphql = require("graphql");
const { Author } = require("../models/author");
const { Book } = require("../models/book");
const { Nft } = require("../models/nft");
const fs = require("fs");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

//////////////////////////////////////////////////////
// Querry Get Data

const NftType = new GraphQLObjectType({
  name: "Nft",
  fields: () => ({
    id: { type: GraphQLID },
    numberOfSales: {
      type: GraphQLString,
    },
    tokenID: {
      type: GraphQLString,
    },
    totalSales: {
      type: GraphQLString,
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        const result = Author.findById(parent.authorId);
        return result;
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        const result = Book.find({ authorId: parent.id });
        return result;
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        const book = Book.findById(args.id);
        return book;
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const author = Author.findById(args.id);
        return author;
      },
    },
    nfts: {
      type: GraphQLList(NftType),
      resolve(parent, args) {
        return Nft.find();
      },
    },
  },
});

//////////////////////////////////////////////////////
// Mutation, adding data
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          email: args.email,
          age: args.age,
        });
        return author.save();
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
    addNft: {
      type: GraphQLList(NftType),
      resolve(parent, args) {
        console.log("Add Nft");
        return [];
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
