const router = require("express").Router();
const adminController = require("../controllers/adminControllers");

router.post("/admin/login", adminController.adminLogin);
router.post("/admin/verify", adminController.adminVerify);
router.post("/admin/signup", adminController.adminSignup);

module.exports = router;
