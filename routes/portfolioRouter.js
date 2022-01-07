const express = require("express");
const portfolioRouter = express.Router();

portfolioRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get("/portfolio", (req, res) => {
    res.statusCode = 200;
    res.end("Will send requested /portfolio");
  })
  .post("/portfolio", (req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported for /portfolio");
  })
  .put("/portfolio", (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for /portfolio");
  })
  .delete("/portfolio", (req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported for /portfolio");
  })
  .get("/portfolio/:portfolioId", (req, res) => {
    res.statusCode = 200;
    res.end("Sending /portfolio/:portfolioId item to you");
  })
  .put("/portfolio/:portfolioId", (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for /portfolio/:portfolioId");
  })
  .post("/portfolio/:portfolioId", (req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported for /portfolio/:portfolioId");
  })
  .delete("/portfolio/:portfolioId", (req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported for /portfolio/:portfolioId");
  });

module.exports = portfolioRouter;