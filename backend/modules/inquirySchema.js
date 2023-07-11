//second schema after login
const mongoose = require("mongoose");
const db = require("./connection");

const Inquiry = mongoose.model("inquiry", {
  userId: String, // User._id
  inquiry: String,
  checkIn: String,
  checkOut: String,
  room: String,
  date: String,
  comment: String, // this will be changed by the admin
});

module.exports = Inquiry;
