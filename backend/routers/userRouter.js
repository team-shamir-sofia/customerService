const router = require("express").Router();
const userController = require("../controllers/userControllers");

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);
router.post("/verify", userController.userVerify);

module.exports = router;
