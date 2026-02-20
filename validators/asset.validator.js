const { body } = require("express-validator");
const mongoose = require("mongoose");

const listAssetRules = [
  // Title
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .escape()
    .isLength({ max: 200 })
    .withMessage("Title must be under 200 characters"),

  // Platform (optional, but must be valid ObjectId if provided)
  body("platform")
    .optional()
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Platform must be a valid ID"),

  // Category (optional, but must be valid ObjectId if provided)
  body("category")
    .optional()
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Category must be a valid ID"),

  // URL
  body("url")
    .trim()
    .notEmpty()
    .withMessage("URL is required")
    .isURL()
    .withMessage("Must be a valid URL")
    .escape(),

  // Description
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .escape()
    .isLength({ max: 1000 })
    .withMessage("Description must be under 1000 characters"),

  // Price
  body("price")
    .notEmpty()
    .trim()
    .withMessage("Price is required")
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  // Status
  body("status")
    .optional()
    .isIn(["sold", "available", "featured"])
    .withMessage("Invalid status"),

  // Metadata
  body("metadata.followers")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Followers must be a positive integer"),

  body("metadata.niche").optional().trim().escape(),

  body("metadata.accountAge")
    .optional()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("Account age must be a positive number"),

  body("metadata.engagementRate")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Engagement rate must be a positive number"),

  body("metadata.extraDetails").optional().trim().escape(),
];
const updateAssetRules = [
  // Title
  body("title")
    .optional() // <--- everything optional now
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty")
    .escape()
    .isLength({ max: 200 })
    .withMessage("Title must be under 200 characters"),

  // Platform
  body("platform")
    .optional()
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Platform must be a valid ID"),

  // Category
  body("category")
    .optional()
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Category must be a valid ID"),

  // URL
  body("url")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("URL cannot be empty")
    .isURL()
    .withMessage("Must be a valid URL")
    .escape(),

  // Description
  body("description")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Description cannot be empty")
    .escape()
    .isLength({ max: 1000 })
    .withMessage("Description must be under 1000 characters"),

  // Price
  body("price")
    .optional()
    .trim()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  // Status
  body("status")
    .optional()
    .isIn(["sold", "available", "featured"])
    .withMessage("Invalid status"),

  // Metadata
  body("metadata.followers")
    .optional()
    .toInt()
    .isInt({ min: 0 })
    .withMessage("Followers must be a positive integer"),

  body("metadata.niche").optional().trim().escape(),

  body("metadata.accountAge")
    .optional()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("Account age must be a positive integer"),

  body("metadata.engagementRate")
    .optional()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("Engagement rate must be a positive number"),

  body("metadata.extraDetails").optional().trim().escape(),

  // Verified
  body("verified")
    .optional()
    .isBoolean()
    .withMessage("Verified must be true or false"),
];

module.exports = {
  listAssetRules,
  updateAssetRules,
};
