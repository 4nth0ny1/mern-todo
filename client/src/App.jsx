import "./App.css";
import { useState, useEffect } from "react";
import readTodosRequest from "./api/readTodosRequest";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    readTodosRequest().then((allTodos) => setTodos(allTodos));
  }, []);

  return (
    <>
      <h1>Mern Todo App</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.text}: {todo.completed ? "Complete" : "Not Complete"}
          </div>
        );
      })}
    </>
  );
}

export default App;
