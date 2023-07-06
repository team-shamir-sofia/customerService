const router = require("express").Router();
const reservationController = require("../controllers/reservationControllers");

router.post("/user/inquiry", reservationController.userReservation);
router.get("/admin/inquiry", reservationController.getReservation);
router.get("/admin/inquiry/:checkIn", reservationController.getByCheckInDate);
router.get("/admin/inquiry/:checkOut", reservationController.getByCheckOutDate);
router.get("/admin/inquiry/:userId", reservationController.getByUserId);
router.get("/admin/inquiry/:date", reservationController.getByDate);
router.delete("/admin/inquiry/:id", reservationController.deleteReservation);
router.put("/admin/inquiry/:id", reservationController.addComment);

module.exports = router;
