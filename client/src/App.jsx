import "./App.css";
import readTodosRequest from "./api/readTodosRequest";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";
import TodoItem from "./components/TodoItem";

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
            <TodoItem
              key={todo._id}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })
      )}
    </>
  );
}

export default App;
