const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const authJWT = require("../utils/authJWt.js");

router.get("/login", (req, res) => {
  res.send("please login first");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = User({
    name,
    email,
    password,
  });

  try {
    await user.save();
  } catch (e) {
    return res.status(500).json({ message: "Some thing went wrong!" + e });
  }
  res.status(200).json({
    success: true,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password != password) {
    return res.status(401).json({ message: "Wrong Email or Password" });
  }

  const accessToken = authJWT.sign({ id: user.id });
  res.status(200).json({
    success: true,
    data: {
      id: user.id,
      name: user.name,
      accessToken,
    },
  });
});

router.get("/user/me", authJWT.verify, async (req, res) => {
  const user = await User.findById(req.userId);

  res.status(200).json({
    success: true,
    data: {
      id: user.id,
      name: user.name,
    },
  });
});

module.exports = router;
