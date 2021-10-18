const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  url: { type: String, required: true },
  shortUrl: { type: String, required: true, index: {unique: true}},
  date: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId }, //TODO: set required: true
  hits: {type: Number, default: 0}
});

module.exports = mongoose.model("Url", urlSchema);
