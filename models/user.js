const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// userId (default)
// links
// username
// password 
const userSchema = new Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  links: { type: Array }, // todo create references/associations with submitted links
});

module.exports = mongoose.model("User", userSchema);
