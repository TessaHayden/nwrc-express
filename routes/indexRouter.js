const express = require("express");
const indexRouter = express.Router();

indexRouter.route("/").all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});
