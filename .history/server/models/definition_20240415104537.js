const mongoose = require("mongoose");

const DefinitionSchema = new mongoose.Schema({
  ["Lemma.LemmaSign"]: String,
  LemmaSign: String,
  Sense: {
    Example: {
      'Example.Example': String,
      'Example.Translation': String,
      'Example.Source': String
    },
    TE: {
      "TE.TE": String
    }
  },
  "Lemma.Etymology": String,

});

module.exports = mongoose.model("definition", DefinitionSchema);
