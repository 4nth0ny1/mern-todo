import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import createTodoRequest from "../api/createTodoRequest";

const CreateTodoForm = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
        setText("");
      },
    }
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTodo({ text });
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>create</button>
    </form>
  );
};

export default CreateTodoForm;
