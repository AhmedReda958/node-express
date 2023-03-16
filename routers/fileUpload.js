const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const name = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "_" + name + ext);
  },
});

const upload = multer({
  storage: storage,
  //   dest: "uploads",
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext != ".png") {
      return cb(new Error("Invalid file type"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // max size is 5MB
  },
});

router.post("/upload/photo", upload.single("photo"), async (req, res) => {
  res.status(200).json({
    success: true,
  });
});

module.exports = router;
