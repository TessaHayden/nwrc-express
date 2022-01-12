const express = require('express');
const contactRouter = express.Router();

contactRouter
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Sending to You!");
  })
  .post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Sending to You!");
  })
  .put((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "html/plain");
    res.write("Sending to You!");
  })
  .delete((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "html/plain");
    res.write("Sending to You!");
  });

    module.exports = contactRouter;