const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
// Add this right after const app = express();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Restaurant API running");
});

app.get("/test", (req, res) => {
  res.json({ message: "API working" });
});

app.use("/api/auth", authRoutes);

module.exports = app;
