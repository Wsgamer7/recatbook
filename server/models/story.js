const mongoose = require("mongoose");

//define a story schema for the database
const StorySchema = new mongoose.Schema({
  create_name: String,
  content: String,
  create_id: String,
});

// compile model from schema
module.exports = mongoose.model("Story", StorySchema);
