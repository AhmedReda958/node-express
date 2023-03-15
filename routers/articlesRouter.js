const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("Articles Page!");
});

router.get("/articles/:id", (req, res) => {
  res.send(`Show article ${req.params.id}`);
});

module.exports = router;
