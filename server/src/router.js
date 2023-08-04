const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("hello login page");
});

module.exports = router;
