import React from "react";

const TodoItem = ({ text, completed }) => {
  return (
    <div>
      {text}: {completed ? " Complete" : " Not Complete"}
    </div>
  );
};

export default TodoItem;
