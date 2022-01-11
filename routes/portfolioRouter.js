const express = require("express");
const { authenticate } = require("passport");
const Portfolio = require("../models/portfolio");
const cors = require("./cors");

const portfolioRouter = express.Router();

portfolioRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    Portfolio.find()
      .then((portfolioItem) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(portfolioItem);
      })
      .catch((err) => next(err));
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("POST operation not supported for /portfolio");
    }
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("PUT operation not supported for /portfolio");
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("DELETE operation not supported for /portfolio");
    }
  );

portfolioRouter
  .route("/:portfolioId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res) => {
    res.statusCode = 200;
    res.end("Sending /portfolio/:portfolioId item to you");
  })
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("PUT operation not supported for /portfolio/:portfolioId");
    }
  )
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("POST operation not supported for /portfolio/:portfolioId");
    }
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
      res.statusCode = 403;
      res.end("DELETE operation not supported for /portfolio/:portfolioId");
    }
  );

module.exports = portfolioRouter;
