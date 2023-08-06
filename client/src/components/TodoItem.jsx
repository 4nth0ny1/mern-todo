import React from "react";
import { useMutation, useQueryClient } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo),
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
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <input
        type="text"
        value={todo.text}
        onChange={(e) =>
          updateTodo({
            ...todo,
            text: e.target.value,
          })
        }
      />
    </div>
  );
};

export default TodoItem;
