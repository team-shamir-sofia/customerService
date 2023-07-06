const Admin = require("../modules/adminSchema");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//log in
const adminLogin = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (admin) {
    bcrypt.compare(req.body.password, admin.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ id: admin._id }, "greenfield");
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
  adminLogin,
  adminVerify,
};