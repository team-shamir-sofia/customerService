const mongoose = require("mongoose");
const db = mongoose.connect(
  "mongodb+srv://sofiailiana:sofia@cluster0.z3lhgfp.mongodb.net/customerService?retryWrites=true&w=majority"
);

module.exports = db;
