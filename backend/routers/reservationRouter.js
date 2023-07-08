const router = require("express").Router();
const reservationController = require("../controllers/reservationControllers");

router.post("/user/inquiry", reservationController.userReservation);
router.get("/admin/inquiry", reservationController.getReservation);
router.get(
  "/admin/inquiryByCheckIn/:checkIn",
  reservationController.getByCheckInDate
);
router.get(
  "/admin/inquiryByCheckOut/:checkOut",
  reservationController.getByCheckOutDate
);
router.get("/admin/inquiryByUser/:userId", reservationController.getByUserId);
router.get("/admin/inquiryByDate/:date", reservationController.getByDate);
router.delete(
  "/admin/delete/inquiry/:id",
  reservationController.deleteReservation
);
router.put("/admin/comment/inquiry/:id", reservationController.addComment);

module.exports = router;



