const mongoose = require("mongoose");

//define a story schema for the database
const CommentSchema = new mongoose.Schema({
  create_name: String,
  content: String,
  create_id: String,
  story_id: String,
});

// compile model from schema
module.exports = mongoose.model("Comment", CommentSchema);
