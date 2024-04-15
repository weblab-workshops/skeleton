const express = require("express");
const Definition = require("./models/definition");
const auth = require("./auth");
const socketManager = require("./server-socket");
const router = express.Router();

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    return res.send({});
  }
  res.send(req.user);
});

// Fetching a specific definition based on the '_id' query parameter 'q'
router.get("/definitions", (req, res) => {
  let queryId = req.query.q;
  if (queryId) {
    queryId = queryId.trim().replace(/[?]+$/, "");

    Definition.findById(queryId)
      .then(definition => {
        if (!definition) {
          return res.status(404).send('Definition not found');
        }
        res.json(definition);
      })
      .catch(err => {
<<<<<<< HEAD
=======
        console.error(err);
>>>>>>> refs/remotes/origin/main
        res.status(500).send('Internal server error');
      });
  } else {
    Definition.find({})
      .then(definitions => res.send(definitions))
      .catch(err => {
<<<<<<< HEAD
=======
        console.error(err);
>>>>>>> refs/remotes/origin/main
        res.status(500).send('Internal server error');
      });
  }
});

<<<<<<< HEAD
// Search for similar words
router.get("/searches", async (req, res) => {
  const searchTerm = req.query.q;
  if (!searchTerm) {
    return res.status(400).send({ error: "Query parameter 'q' is required" });
  }

  try {
    const regex = new RegExp(searchTerm, 'i');
    const query = {
      $or: [
        { LemmaSign: { $regex: regex } },
        { "Sense.TE.TE": { $regex: regex } }
      ]
    };
    const definitions = await Definition.find(query);

    console.log("Filtered definitions:", definitions.map(def => `${def.LemmaSign} or ${def.Sense.TE.TE}`));
    res.json(definitions);
  } catch (err) {
    res.status(500).send('Internal server error');
=======
// Search
router.get("/searches", (req, res) => {
  let searchQuery = req.query.q || "";
    if (searchQuery.endsWith('?')) {
        searchQuery = searchQuery.slice(0, -1);
    }
  // let searchQuery = req.query.q || "";
  console.log("Search query received:", searchQuery);  // Log the received query
  searchQuery = searchQuery.replace(/\?$/, '');

  try {
      const results = Definition.find({
          "Lemma.LemmaSign": { $regex: searchQuery, $options: 'i' }
      });
      console.log("Results: ", results)
      res.json(results);
  } catch (error) {
      console.error("Search error:", error);
      res.status(500).send('Internal server error');
>>>>>>> refs/remotes/origin/main
  }
});


<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
router.post("/initsocket", (req, res) => {
  if (req.user) {
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  }
  res.send({});
});

router.all("*", (req, res) => {
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
