require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("testing new backend");
});

app.get("/login", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
