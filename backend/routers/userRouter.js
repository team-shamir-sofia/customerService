const router = require("express").Router();
const userController = require("../controllers/userControllers");

router.post("/user/signup", userController.userSignup);
router.post("/user/login", userController.userLogin);
router.post("/user/verify", userController.userVerify);

module.exports = router;
