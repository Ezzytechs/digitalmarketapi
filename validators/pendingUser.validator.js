const { body } = require("express-validator");

const createPendingUserRules = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),
];

module.exports = {
  createPendingUserRules,
};
