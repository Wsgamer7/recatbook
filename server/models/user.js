const mongoose = require("mongoose");

//define a story schema for the database
const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
});

// compile model from schema
module.exports = mongoose.model("User", UserSchema);
