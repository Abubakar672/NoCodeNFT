const mongoose = require("mongoose");
const winston = require("winston");
const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    winston.error(`Error: ${error.message}`);

    // console.error(`Error: ${error.message}`)
    process.exit(1);
  }
};
module.exports = connectToDB;
