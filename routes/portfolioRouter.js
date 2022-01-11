const express = require("express");
const { authenticate } = require("passport");
const Portfolio = require("../models/portfolio");
const portfolioRouter = express.Router();

portfolioRouter
  .route("/")
  .get("/portfolio", (req, res, next) => {
    Portfolio.find()
      .then((portfolioItem) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(portfolioItem);
      })
      .catch((err) => next(err));
  })
  .post("/portfolio", authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported for /portfolio");
  })
  .put("/portfolio", authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for /portfolio");
  })
  .delete("/portfolio", authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported for /portfolio");
  });

portfolioRouter
  .route("/:portfolioId")
  .get("/portfolio/:portfolioId", (req, res) => {
    res.statusCode = 200;
    res.end("Sending /portfolio/:portfolioId item to you");
  })
  .put("/portfolio/:portfolioId", authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for /portfolio/:portfolioId");
  })
  .post("/portfolio/:portfolioId", authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported for /portfolio/:portfolioId");
  })
  .delete("/portfolio/:portfolioId", authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported for /portfolio/:portfolioId");
  });

module.exports = portfolioRouter;
