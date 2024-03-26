const mongoose = require("mongoose");

const DefinitionSchema = new mongoose.Schema({
  "Lemma.LemmaSign": String, //word
  Sense: {
    TE: {
        "TE.TE": String  // translation
    },
    Example: {
        "Example.Example": String,
        "Example.Translation": String,
        "Example.Source": String
    }
  },
  "Lemma.Etymology": String,
},
{}

);

// compile model from schema
module.exports = mongoose.model("definitions", DefinitionSchema);
