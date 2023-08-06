import React, { useCallback, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";
import deleteTodoRequest from "../api/deleteTodoRequest";
import { debounce } from "lodash";

const TodoItem = ({ todo }) => {
  const [text, setText] = useState(todo.text);
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

  const debouncedUpdateTodo = useCallback(debounce(updateTodo, 600), [
    updateTodo,
  ]);

  useEffect(() => {
    if (text !== todo.text) {
      debouncedUpdateTodo({
        ...todo,
        text,
      });
    }
  }, [text]);

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
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => deleteTodo(todo)}>del</button>
    </div>
  );
};

export default TodoItem;
