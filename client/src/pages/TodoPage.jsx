import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import TodoItem from "../components/TodoItem";
import CreateTodoForm from "../components/CreateTodoForm";
import readTodosRequest from "../api/readTodosRequest";
import { useQuery } from "react-query";

export const TodoPage = () => {
  const { isLoading, data: todos } = useQuery("todos", readTodosRequest);

  return (
    <div>
      <h1>Mern Todo App</h1>
      <CreateTodoForm />
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} />;
        })
      )}
    </div>
  );
};
