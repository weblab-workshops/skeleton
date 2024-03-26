const mongoose = require("mongoose");

//Definition schema
const DefinitionSchema = new mongoose.Schema({
  creator_id: String,
  content : String,
});
module.exports = mongoose.model("Definitions", DefinitionSchema);
