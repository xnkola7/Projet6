const express = require("express");
require("express-async-errors");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev", { immediate: true }));
app.use(morgan("dev"));
app.use(function (req, res) {
  res.json("Bonjour");
});
module.exports = app;
