import React from "react";
import { useMutation, useQueryClient } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: toggleCompletion } = useMutation(
    () => {
      return updateTodoRequest({ ...todo, completed: !todo.completed });
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  return (
    <div>
      <input
        checked={todo.completed}
        type="checkbox"
        onChange={toggleCompletion}
      />
      {todo.text}
    </div>
  );
};

export default TodoItem;
