const mongoose = require("mongoose");

const DefinitionSchema = new mongoose.Schema({
  "Lemma.LemmaSign": String,
  Sense: {
    TE: {
        "TE.TE": String
    },
    Example: {
        "Example.Example": String,
        "Example.Translation": String,
        "Example.Source": String
    }
  },
  "Lemma.Etymology": String,
},
{ collection: "definitions" }

);

// compile model from schema
module.exports = mongoose.model("definitions", DefinitionSchema);
