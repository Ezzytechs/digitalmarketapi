const express = require("express");
const router = express.Router();
const walletController = require("../controllers/wallet.controller");
const { auth, admin } = require("../middlewares/auth/auth");
// Get wallet balance and transactions
router.get("/:userId", auth, walletController.getWallet);
router.put("/update-wallet", auth, walletController.updateWallet);
router.get(
  "/get/flutterwave-balance",
  auth,
  admin,
  walletController.getAdminFlutterwaveWalletBalance,
);
module.exports = router;
