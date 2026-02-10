const express = require("express");
const upload = require("../utils/multer");
const router = express.Router();
const postController = require("../controllers/blog.controller");
const { auth, admin } = require("../middlewares/auth/auth");
const validate = require("../middlewares/validate");
const { createPostRules, updatePostRules } = require("../validators");
//create post
router.post(
  "/",
  auth,
  admin,
  upload.single("image"),
  validate(createPostRules),
  postController.createPost,
);

//get all posts
router.get("/", postController.getAllPosts);

//get post by id
router.get("/:id", postController.getPostById);

//stream asset image by image nodeId
router.get("/image/view/:nodeId", postController.getPostImage);

//update post
router.put(
  "/:id",
  auth,
  upload.single("image"),
  validate(updatePostRules),
  postController.updatePost,
);

//delete post
router.delete("/:id", auth, admin, postController.deletePost);

module.exports = router;
