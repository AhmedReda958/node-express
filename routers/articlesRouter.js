const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
  console.log(req.query);
  res.send("Articles Page!");
});

router.get("/articles/:id", (req, res) => {
  res.send(`Show article ${req.params.id}`);
});

router.post("/article", (req, res) => {
  res.send("Post Article");
});

router.delete("/article/:id", (req, res) => {
  res.send("Delete Article");
});
router.put("/article/:id", (req, res) => {
  res.send("Update Article");
});
module.exports = router;
