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
    // Trim the queryId to remove any trailing special characters
    queryId = queryId.trim().replace(/[?]+$/, "");

    Definition.findById(queryId)
      .then(definition => {
        if (!definition) {
          return res.status(404).send('Definition not found');
        }
        res.json(definition);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Internal server error');
      });
  } else {
    Definition.find({})
      .then(definitions => res.send(definitions))
      .catch(err => {
        console.error(err);
        res.status(500).send('Internal server error');
      });
  }
});

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
  }
});



router.post("/initsocket", (req, res) => {
  if (req.user) {
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  }
  res.send({});
});

router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
