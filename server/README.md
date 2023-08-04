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
