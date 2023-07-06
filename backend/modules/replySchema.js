const mongoose = require("mongoose");
const db = require("./connection");

const Reply = mongoose.model("reply", {
  usernameId: String, // admin._id
  reply: String,
});

module.exports = Reply;
