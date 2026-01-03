const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Restaurant API running");
});

app.get("/test", (req, res) => {
  res.json({ message: "API working" });
});


module.exports = app;