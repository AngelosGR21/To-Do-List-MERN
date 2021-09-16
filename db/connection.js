const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  mongoose.connect(process.env.CONNECTION);
};
module.exports = connection;
