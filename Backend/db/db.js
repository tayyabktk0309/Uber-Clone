const mongoose = require("mongoose");
require("dotenv").config();
const connectToDb = async () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("connect to DB"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
