const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth/auth");
const authController = require("../controllers/auth.controller");
const { createRateLimiter } = require("../configs/rateLimiter");
const validate = require("../middlewares/validate");
const { createPendingUserRules } = require("../validators");

//registration otp
router.post(
  "/register/otp/generate",
  createRateLimiter(10, 15),
  validate(createPendingUserRules),
  authController.sendRegOtp,
);

//registration otp
router.post("/register/otp/verify", authController.verifyRegOtp);

//register user
router.post("/register", authController.register);

//user login
router.post("/login", createRateLimiter(5, 10), authController.login);

//update password
router.put("/update/password", auth, authController.updatePassword);

//generate otp for password reset
router.post(
  "/generate-otp",
  createRateLimiter(5, 10),
  authController.generateOtp,
);

//reset password
router.post("/password/reset", authController.resetPassword);

//update email
router.post("/change/email", auth, authController.changeEmail);

//generate new access token
router.get("/refresh-token", authController.refreshToken);

//logout user
router.get("/logout", authController.logout);

module.exports = router;
