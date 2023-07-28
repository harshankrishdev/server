const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URL = process.env.MONGO_URL;

mongoose.connect(URL, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
