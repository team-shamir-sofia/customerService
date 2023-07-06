const mongoose = require("mongoose");
const db = require("./connection");

const Reply = mongoose.model("reply", {
  usernameId: String, // admin._id
  reply: String,
  userId: String, //user._id
});

module.exports = Reply;
