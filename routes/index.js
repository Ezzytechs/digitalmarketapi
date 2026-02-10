const express = require("express");
const router = express.Router();

router.use("/users", require("./users.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/orders", require("./order.routes"));
router.use("/blog", require("./blog.routes"));
router.use("/categories", require("./category.routes"));
router.use("/assets", require("./assets.routes"));
router.use("/wallet", require("./wallet.routes"));
router.use("/payment", require("./payment.routes"));
router.use("/transactions", require("./transactions.routes"));
router.use("/platforms", require("./platform.routes"));
router.use("/notifications", require("./notification.routes"));
router.use("/cart", require("./cart.routes"));

module.exports = router;
