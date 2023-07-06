const router = require("express").Router();
const replyController = require("../controllers/replyControllers");

router.post("/admin/reply", replyController.sendReply);
router.get("/user/getReply/:userId", replyController.getReplyByUserId);
router.delete("/user/deleteMsg/:id", replyController.deleteReply);

module.exports = router;
