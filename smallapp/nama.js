const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("hello world!!");
});
router.post("/", function (req, res) {
  res.send("hello world!! from post");
});

module.exports = router;
