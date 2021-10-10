const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// url
// shortened
// date
// userId
const urlSchema = new Schema({
  url: { type: String, required: true },
  shortUrl: { type: String, required: true, index: {unique: true}},
  date: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId }, //TODO: set required: true
});

module.exports = mongoose.model("Url", urlSchema);
