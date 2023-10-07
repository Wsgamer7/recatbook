/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");
// import models so we can interact with the database
const Story = require("./models/story");
const Comment = require("./models/comment");
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

router.get("/stories", (req, res) => {
  Story.find({}).then((stories) => res.send(stories.reverse()));
});
router.post("/story", (req, res) => {
  const newStory = new Story({
    create_id: req.user._id,
    create_name: req.user.name,
    content: req.body.content,
  });
  newStory.save().then((story) => res.send(story));
});

router.get("/comments", (req, res) => {
  Comment.find({ story_id: req.query.story_id }).then((comments) => res.send(comments));
});
router.post("/comment", (req, res) => {
  console.log(req.body);
  const newComment = new Comment({
    create_name: req.user.name,
    content: req.body.content,
    create_id: req.user._id,
    story_id: req.body.story_id,
  });
  newComment.save().then((story) => res.send(story));
});
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.all("*", (req, res) => {
  res.status(404).send({ message: "API not found" });
});
module.exports = router;
