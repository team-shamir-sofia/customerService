const Admin = require("../modules/adminSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//sign up
const adminSignup = async (req, res) => {
  const checkAdmin = await Admin.findOne({ username: req.body.username });
  if (checkAdmin) {
    res.send({ msg: "You already have an account" });
    return;
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      const admin = {
        username: req.body.username,
        password: hash,
      };
      const newAdmin = await Admin.create(admin);
      const token = jwt.sign({ id: newAdmin._id }, "greenfield");
      res.send({ token });
    });
  });
};

//log in
const adminLogin = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (admin) {
    bcrypt.compare(req.body.password, admin.password, function (err, result) {
      if (result) {
        const token = jwt.sign({ id: admin._id }, "greenfield");
        res.send({ token });
      } else {
        res.send({ msg: "wrong password" });
      }
    });
  } else {
    res.send({ msg: "Wrong username" });
  }
};

//verify
const adminVerify = async (req, res) => {
  if (!req.body.token) {
    res.send({ msg: "try again" });
  }
  try {
    const payload = jwt.verify(req.body.token, "greenfield");
    if (payload) {
      const admin = await Admin.findOne({ _id: payload.id });
      if (admin) {
        res.send(admin);
      } else {
        res.send({ msg: "Invalid token" });
      }
    } else {
      res.send({ msg: "Invalid token" });
    }
  } catch (err) {
    res.send({ msg: "Invalid token" });
  }
};

module.exports = {
  adminSignup,
  adminLogin,
  adminVerify,
};
