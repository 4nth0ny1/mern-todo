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
