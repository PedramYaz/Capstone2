const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3001",
};
app.use(cors(corsOptions));

const songRoutes = require("./routes/songs");
const ExpressError = require("./expressError");

app.use(express.json());
app.use("/songs", songRoutes);

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
