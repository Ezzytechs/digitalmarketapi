const { body } = require("express-validator");
const mongoose = require("mongoose");

// ---------- CREATE POST ----------
const createPostRules = [
  // Title
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .escape()
    .isLength({ max: 200 })
    .withMessage("Title must be under 200 characters"),

  // Content
  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required")
    .escape()
    .isLength({ max: 5000 })
    .withMessage("Content must be under 5000 characters"),

  // Image (optional)
  body("image")
    .optional()
    .trim()
    .isURL()
    .withMessage("Image must be a valid URL")
    .escape(),

  // Tags (optional)
  body("tags").optional().trim().escape(),

  // Thumbnail (optional)
  body("thumbnail")
    .optional()
    .trim()
    .isURL()
    .withMessage("Thumbnail must be a valid URL")
    .escape(),
];

// ---------- UPDATE POST ----------
const updatePostRules = [
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty")
    .escape()
    .isLength({ max: 200 })
    .withMessage("Title must be under 200 characters"),

  body("content")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Content cannot be empty")
    // .escape()
    .isLength({ max: 5000 })
    .withMessage("Content must be under 5000 characters"),

  body("tags").optional().trim().escape(),
];

module.exports = {
  createPostRules,
  updatePostRules,
};
