const Inquiry = require("../modules/inquirySchema");

//create inquiry from user
const userInquiry = async (req, res) => {
  await Inquiry.create(req.body);
  res.send({ msg: "send successfully" });
};

//get all inquiries for the admin
const getInquiry = async (req, res) => {
  const inquiry = await Inquiry.find();
  res.send(inquiry);
};

//get inquiry by check in date for admin
const getByCheckInDate = async (req, res) => {
  const { checkIn } = req.query;
  const inquiry = await Inquiry.find({
    checkIn: req.params.checkIn,
  });
  res.send(inquiry);
};

//get inquiry from check out date for admin
const getByCheckOutDate = async (req, res) => {
  const inquiry = await Inquiry.find({
    checkOut: req.params.checkOut,
  });
  res.send(inquiry);
};

//get inquiry from post date for admin
const getByDate = async (req, res) => {
  const inquiry = await Inquiry.find({
    date: req.params.date,
  });
  res.send(inquiry);
};

//get inquiry from userId for admin
const getByUserId = async (req, res) => {
  const inquiry = await Inquiry.find({
    userId: req.params.userId,
  });
  res.send(inquiry);
};

//delete inquiry for the admin
const deleteInquiry = async (req, res) => {
  await Inquiry.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted" });
};

//comment on a inquiry for admin
const addComment = async (req, res) => {
  await Inquiry.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.send({ msg: "You're comment is saved" });
};

module.exports = {
  userInquiry,
  getInquiry,
  deleteInquiry,
  addComment,
  getByCheckInDate,
  getByCheckOutDate,
  getByDate,
  getByUserId,
};
