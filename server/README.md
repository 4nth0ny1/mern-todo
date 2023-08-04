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
