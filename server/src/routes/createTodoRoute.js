const TodoModel = require("../models/TodoModel");

module.exports = async (req, res) => {
  const { text } = req.body;
  const todo = new TodoModel({
    text,
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};
