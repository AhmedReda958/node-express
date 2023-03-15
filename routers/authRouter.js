const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("please login first");
});

module.exports = router;
