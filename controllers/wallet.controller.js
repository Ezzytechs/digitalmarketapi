const Wallet = require("../models/wallet.model");
const { getWalletBalance } = require("../utils/payment");
// Get wallet balance
exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ owner: req.user.userId });
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });
    res.status(200).json(wallet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateWallet = async (req, res) => {
  try {
    delete req?.body?.balance;

    const updatedWallet = await Wallet.findOneAndUpdate(
      { owner: req.user.userId },
      { ...req.body },
      { new: true },
    );
    if (!updatedWallet)
      return res.status(400).json({ message: "Unable to update your wallet" });
    res.status(200).json(updatedWallet);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAdminFlutterwaveWalletBalance = async (req, res) => {
  try {
    const flutterwaveWalletBalance = await getWalletBalance();
    if (!flutterwaveWalletBalance) {
      return res
        .status(400)
        .json({ message: "Unable to get flutterwave balance" });
    }
    res.status(200).json(flutterwaveWalletBalance);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
