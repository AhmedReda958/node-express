const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("please login first");
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login data");
});

module.exports = router;
