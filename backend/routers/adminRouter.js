const router = require("express").Router();
const adminController = require("../controllers/adminControllers");

router.post("/login", adminController.adminLogin);
router.post("/verify", adminController.adminVerify);

module.exports = router;
