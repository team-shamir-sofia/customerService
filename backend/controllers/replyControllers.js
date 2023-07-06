const Reply = require("../modules/replySchema");

//for the admin to send a reply
const sendReply = async (req, res) => {
  await Reply.create(req.body);
  res.send({ msg: "send successfully" });
};

//for the user to get a reply
const getReplyByUserId = async (req, res) => {
  const replyMsg = await Reply.find({
    userId: req.params.userId,
  });
  res.send(replyMsg);
};

//for the user to delete a reply, not sure if we are using this one
const deleteReply = async (req, res) => {
  await Reply.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted" });
};

module.exports = { sendReply, getReplyByUserId, deleteReply };
