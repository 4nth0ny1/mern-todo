# Mern Todo Frontend Readme

npm create vite .

- name: mern-todo
- type: react
- language: javascript

npm install
npm run dev

## installing dependencies

npm i --save react-query react-spinners

## fetch todos with useEffect

### create /src/api/readTodosRequest.js

```
const API_URL = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTE5MDYyOX0.KUDMbnbzmFWu5mBjRyaigPiZLg0f80vAbC02HsknvRE";

export default () => {
  return fetch(`${API_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};


```

### use useEffect and useState to render the todos

```
import "./App.css";
import { useState, useEffect } from "react";
import readTodosRequest from "./api/readTodosRequest";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    readTodosRequest().then((allTodos) => setTodos(allTodos));
  }, []);

  return (
    <>
      <h1>Mern Todo App</h1>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.text}</div>;
      })}
    </>
  );
}
```
