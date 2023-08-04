const express = require("express");

// setup express server
const app = express();

app.get("/todos", (req, res) => {
  res.send("hello again");
});

// configure the app
app.listen(8080);
