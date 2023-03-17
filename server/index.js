require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const cors = require("cors");
const winston = require("winston");

const errors = require("./middleware/errors");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const connectToDB = require("./config/db");
const logging = require("./config/logging");

app.use(cors());
app.use(errors);

require("./config/db")();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

const port = process.env.PORT;

connectToDB()
  .then((conn) => {
    console.log(`MongoDB Connected`);
    app.listen(port, console.log(`Connected to Port ${port}.`));
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    winston.error(`Error: ${error.message}`);
  });

logging();
