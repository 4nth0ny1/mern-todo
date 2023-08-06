const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const deleteTodoRoute = require("./routes/deleteTodoRoute");
const updateTodoRoute = require("./routes/updateTodoRoute");
const createTodoRoute = require("./routes/createTodoRoute");
const readTodosRoute = require("./routes/readTodosRoute");

const router = express.Router();

router.post("/login", require("./routes/loginRoute"));

router.get("/todos", isLoggedIn, readTodosRoute);
router.post("/todos", isLoggedIn, createTodoRoute);
router.put("/todos/:id", isLoggedIn, updateTodoRoute);
router.delete("/todos/:id", isLoggedIn, deleteTodoRoute);

module.exports = router;
