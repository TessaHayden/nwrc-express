const express = require("express");
const homeRouter = express.Router();

homeRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get('/home', (req, res) => {
    res.end("Loading Home Page for You!");
  })
  .post('/home', (req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported for /home");
  })
  .put('/home', (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for /home");
  })
  .delete('/home', (req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported for /home");
  });

module.exports = homeRouter;
