// validate.js
const { validationResult } = require("express-validator");

const validate = (rules) => {
  return async (req, res, next) => {
    // Run all rules
    await Promise.all(rules.map((rule) => rule.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
};

module.exports = validate;
