# Mern Todo Backend Notes

## /server

npm init -y

npm i --save cors dotenv express jsonwebtoken mongoose morgan

## create server

/server/src/index.js

## install nodemon

npm i --save-dev nodemon

Change the scripts in package.json to

```
  "scripts": {
    "start": "nodemon src/index.js"
  },
```

now you can run the server with nodemon
npm run start

## dotenv

add to the index.js file

```
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.MONGODB_URI);
```

create .env file in /server

## morgan -- middleware logging library attached to express app

gives you GET /todos 200 11 - 3.402 ms in the terminal when endpoint is accessed

## cors

## create basic login endpoint

### create /src/router.js file

## create loginRoute.js

create /src/routes/loginRoute.js
separated the loginRoute and required it in the router.js

## create login route with mock password

after you add ...

- console.log(req.body) to the loginRoute.js
- PASSWORD=abc to the .env file

### Postman

POST: http://localhost:8080/login

body => raw => Json

```
{
    "password": "abc"
}
```

### index.js

add middleware
app.use(express.json());

### back to Postman

send the request...
console will read ...
{ password: 'abc' }
POST /login 200 16 - 9.752 ms

### finish if else for password check in loginRoute.js

## jwt token

added jwt logic to the loginRoute.js
added SECRET=123 to .env
tested in Postman
got token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTE5MDYyOX0.KUDMbnbzmFWu5mBjRyaigPiZLg0f80vAbC02HsknvRE

## create todos route

### add this to router.js

router.get("/todos", require("./routes/todosRoute"));

### create src/routes/todosRoute.js

module.exports = (req, res) => {
res.send("success");
};

## authentication middleware

### create src/middleware/isLoggedIn.js

```
module.exports = (req, res, next) => {};
```

### then go to postman

http://localhost:8080/todos GET
Headers
Key=Authorization
Value=Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTE5MDYyOX0.KUDMbnbzmFWu5mBjRyaigPiZLg0f80vAbC02HsknvRE

### back to isLoggedIn.js

```
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("invalid credentials");
  } else {
    const token = authHeader.split(" ")[1];
    console.log(token);
  }
};
```

### router.js

add the middleware to the router.js file for /todos
this will require the user to have a token before seeing any of the /todos

```
const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const router = express.Router();

router.post("/login", require("./routes/loginRoute"));

router.get("/todos", isLoggedIn, require("./routes/todosRoute"));

module.exports = router;

```

### postman

run the get request with the token in the headers and postman will hang, but check the terminal and the token will be in the console.

## jwt verify

### goto isLoggedIn.js

```
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("invalid credentials"); // 401: wrong token
  } else {
    const token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(403).send("invalid credentials"); // 403: bad token.like hacker
      } else {
        next();
      }
    });
  }
};
```

## Mongo setup and TodoModel Schema

after the mongodb setup, I added a .gitignore to ignore the .env file with mongo connection url
verified the connection by modifying the index.js file.

```
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("starting on port 8080"); // if you see this in the terminal then the connection is established with mongo
  app.listen(8080);
});
```

### TodoModel Schema

```
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
```

### rename TodosRoute to readTodosRoute

```
const TodoModel = require("../models/TodoModel");

module.exports = async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
};
```

### Test endpoint in postman

When you do get request for /todos, at this point you should get [] because there aren't any todos.
