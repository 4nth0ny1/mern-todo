import "./App.css";
import readTodosRequest from "./api/readTodosRequest";
import { useQuery } from "react-query";

function App() {
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
