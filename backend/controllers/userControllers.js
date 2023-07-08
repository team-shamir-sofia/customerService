const User = require("../modules/userSchema");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//sign up
const userSignup = async (req, res) => {
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    res.send({ msg: "You already have an account" });
    return;
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      const user = {

        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: hash,
      };
      const newUser = await User.create(user);
      var token = jwt.sign({ id: newUser._id }, "greenfield");
      res.send({ token });
    });
  });
};

//log in
const userLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign({ id: user._id }, "greenfield");
        res.send({ token });
      } else {
        res.send({ msg: "wrong password" });
      }
    });
  } else {
    res.send({ msg: "Wrong email" });
  }
};

//verify
const userVerify = async (req, res) => {
  if (!req.body.token) {
    res.send({ msg: "try again" });
  }
  try {
    const payload = jwt.verify(req.body.token, "greenfield");
    if (payload) {
      const user = await User.findOne({ _id: payload.id });
      if (user) {
        res.send(user);
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
  userSignup,
  userLogin,
  userVerify,
};
