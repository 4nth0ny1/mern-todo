import "./App.css";
import readTodosRequest from "./api/readTodosRequest";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const { isLoading, data: todos } = useQuery("todos", readTodosRequest);

  return (
    <>
      <h1>Mern Todo App</h1>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.text}: {todo.completed ? "Complete" : "Not Complete"}
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
