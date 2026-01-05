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

const { protect } = require("./middleware/authMiddleware");

app.get("/api/test/protected", protect, (req, res) => {
  res.json({
    msg: "Protected route working",
    user: req.user,
  });
});

module.exports = app;
