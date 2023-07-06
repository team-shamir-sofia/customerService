const Reservation = require("../modules/reservationSchema");

//create a reservation from the user
const userReservation = async (req, res) => {
  await Reservation.create(req.body);
  res.send({ msg: "send successfully" });
};

//get the reservations for the admin
const getReservation = async (req, res) => {
  const reservation = await Reservation.find();
  res.send(reservation);
};

//get reservation from check in date for admin
const getByCheckInDate = async (req, res) => {
  const reservation = await Reservation.find({
    checkIn: req.params.checkIn,
  });
  res.send(reservation);
};

//get reservation from check out date for admin
const getByCheckOutDate = async (req, res) => {
  const reservation = await Reservation.find({
    checkOut: req.params.checkOut,
  });
  res.send(reservation);
};

//get reservation from post date for admin
const getByDate = async (req, res) => {
  const reservation = await Reservation.find({
    date: req.params.date,
  });
  res.send(reservation);
};

//get reservation from user for admin
const getByUserId = async (req, res) => {
  const reservation = await Reservation.find({
    userId: req.params.userId,
  });
  res.send(reservation);
};

//delete reservation for the admin
const deleteReservation = async (req, res) => {
  await Reservation.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted" });
};

//comment on a reservation for admin
const addComment = async (req, res) => {
  await Reservation.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.send({ msg: "You're comment is saved" });
};

module.exports = {
  userReservation,
  getReservation,
  deleteReservation,
  addComment,
  getByCheckInDate,
  getByCheckOutDate,
  getByDate,
  getByUserId,
};
