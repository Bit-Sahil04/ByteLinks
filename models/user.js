const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// userId (default)
// links
// username
// password 
const userSchema = new Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  _isAdmin: {type: Boolean, immutable: true}, // set admin manually via compass/mongo website
  links: {type: Array}, 
});

module.exports = mongoose.model("User", userSchema);
