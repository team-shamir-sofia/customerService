const router = require("express").Router();
const inquiryController = require("../controllers/inquiryControllers");

router.post("/user/inquiry", inquiryController.userInquiry);
router.get("/admin/inquiry", inquiryController.getInquiry);
router.get(
  "/admin/inquiryByCheckIn/:checkIn",
  inquiryController.getByCheckInDate
);
router.get(
  "/admin/inquiryByCheckOut/:checkOut",
  inquiryController.getByCheckOutDate
);
router.get("/admin/inquiryByUser/:userId", inquiryController.getByUserId);
router.get("/admin/inquiryByDate/:date", inquiryController.getByDate);
router.delete("/admin/delete/inquiry/:id", inquiryController.deleteInquiry);
router.put("/admin/comment/inquiry/:id", inquiryController.addComment);

module.exports = router;
