const express = require("express");

const router = express.Router();

router.post("/login", require("./routes/loginRoute"));

router.get("/todos", require("./routes/todosRoute"));

module.exports = router;
