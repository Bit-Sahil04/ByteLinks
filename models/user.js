const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// userId
// links
// username
// password 
const userSchema = new Schema({
  url: { type: String, required: true , index: {unique: true}},
  shortUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId }, //TODO: set required: true
});

module.exports = mongoose.model("User", userSchema);
