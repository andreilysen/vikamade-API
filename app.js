const express = require("express");
const morgan = require("morgan");
const app = express();
var cors = require("cors");

const vikamadeRoute = require("./routes/vikamade");

app.use(cors());
app.use(morgan("short"));

app.use("/vikamade", vikamadeRoute);

app.use((_req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ status: "Fail", code: 500, message: err.message });
});

module.exports = app;
