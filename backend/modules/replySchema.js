const mongoose = require("mongoose");
const db = require("./connection");

const Reply = mongoose.model("reply", {
  usernameId: String, //id of admin
  userId: String,
  reply: String,
});

module.exports = Reply;
