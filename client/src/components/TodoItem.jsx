import React from "react";
import { useMutation, useQueryClient } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";
import deleteTodoRequest from "../api/deleteTodoRequest";

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation((id) => updateTodoRequest(id), {
    onSettled: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => deleteTodoRequest(updatedTodo),
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
      <button onClick={() => deleteTodo(todo)}>del</button>
    </div>
  );
};

export default TodoItem;
