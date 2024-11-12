const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const spamRoutes = require("./routes/spamRoutes");
const searchRoutes = require("./routes/searchRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/spam", spamRoutes);
app.use("/search", searchRoutes);

module.exports = app;
