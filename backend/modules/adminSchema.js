const mongoose = require("mongoose");
const db = require("./connection");

const Admin = mongoose.model("admin", {
  username: String,
  password: String,
});

module.exports = Admin;
