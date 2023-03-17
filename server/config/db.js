const mongoose = require("mongoose");
const connectToDB = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
module.exports = connectToDB;
