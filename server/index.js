const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const dotenv = require("dotenv");
const errors = require("./middleware/errors");
app.use(errors);
dotenv.config();
const cors = require("cors");
const { default: axios } = require("axios");

app.use(cors());

// conect to database
require("./startup/db")();
// logging messages
require("./startup/logging")();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 4001;
app.listen(port, () => {});
