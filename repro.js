const { parse } = require("path-to-regexp");

const routes = [
  "/",
  "/users",
  "/auth",
  "/orders",
  "/blog",
  "/categories",
  "/assets",
  "/wallet",
  "/payment",
  "/transactions",
  "/platforms",
  "/notifications",
  "/cart",
  "/api/v1",
  "/:userId",
  "/totals/by-type/:userId",
  "/:id",
  "image/view/:id",
  "/cancel/:id",
  "/cancel/non-user/:id/:mail",
  "/fake/:id",
  "/fake/non-user/:id/:email",
  "/:orderId/submit-credentials",
  "/reveal/credentials",
  "/recent",
  "/user/sales/:userId",
  "/user/orders/:userId",
  "/user/sales-stats/:userId",
  "/user/orders-stats/:userId",
  "/stats/order-bar-info",
  "/stats/order-bar-info/:userId",
  "/stats/get/order-vs-sales",
  "/user/stats/:userId",
  "/edit-profile/:id",
  "/suspend-unsuspend/:id",
  "/get/statistics",
  "/register/otp/generate",
  "/register/otp/verify",
  "/register",
  "/login",
  "/update/password",
  "/generate-otp",
  "/password/reset",
  "/change/email",
  "/refresh-token",
  "/logout",
  "/image/view/:id",
  "/remove/:assetId",
  "/add",
  "/count",
  "/clear",
  "/categories/:platform/:category",
  "/my-assets/:username",
  "/stats",
  "/get/stats",
  "/search",
  "/image/view/:nodeId",
  "/my-transactions-history",
  "/my-transactions-history/count",
  "/total",
  "/user/revenue",
  "/credits",
  "/debits",
  "/count/credits",
  "/count/debits",
  "/get/flutterwave-balance",
];

// Add some problematic ones just to see
routes.push("/:", "/ :", "/: ", "/:/", "/foo/:/bar", "/:123", "/:-foo");

routes.forEach((route) => {
  try {
    parse(route);
  } catch (e) {
    console.error(`FAIL: "${route}" - ${e.message}`);
  }
});
console.log("Finished checking " + routes.length + " routes.");
