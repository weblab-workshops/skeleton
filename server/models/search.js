const mongoose = require("mongoose");

//Definition schema
const SearchSchema = new mongoose.Schema({
  _id: String,
  content : String,
});
module.exports = mongoose.model("Definitions", SearchSchema);
