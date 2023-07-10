//second schema after login
const mongoose = require("mongoose");
const db = require("./connection");

const Reservation = mongoose.model("inquiry", {
  userId: String, // User._id
  inquiry: String,
  checkIn: String,
  checkOut: String,
  room: String,
  date: Date,
  comment: String, // this will be changed by the admin
});

module.exports = Reservation;
