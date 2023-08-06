const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const router = express.Router();

router.post("/login", require("./routes/loginRoute"));

router.get("/todos", isLoggedIn, require("./routes/readTodosRoute"));
router.post("/todos", isLoggedIn, require("./routes/createTodoRoute"));
router.put("/todos/:id", isLoggedIn, require("./routes/updateTodoRoute"));
router.delete("/todos/:id", isLoggedIn, require("./routes/deleteTodoRoute"));

module.exports = router;
