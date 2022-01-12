const express = require("express");
const Portfolio = require("../models/portfolio");
const authenticate = require('../authenticate');
const cors = require("./cors");

const portfolioRouter = express.Router();

portfolioRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    Portfolio.find()
      .then((item) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
      }).catch(err => next(err));
  })
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
      Portfolio.create(req.body)
        .then((item) => {
          console.log('Portfolio item created', item);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(item);
        }).catch((err) => next(err));
    })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for /portfolio");
  })
  .delete(cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      Portfolio.deleteMany()
        .then((response) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(response);
        })
        .catch(err => next(err));
    });

portfolioRouter
  .route("/:portfolioId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    Portfolio.findById(req.params.portfolioId)
      .then((item) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(item);
      })
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /portfolio/${req.params.portfolioId}`);
  })
  .put(cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      Portfolio.findByIdAndUpdate(
        req.params.portfolioId,
        {
          $set: req.body,
        },
        { new: true }
      )
        .then(item => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(item);
        })
        .catch(err => next(err));
  })
  .delete(cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      Portfolio.findByIdAndDelete(req.params.campsiteId)
        .then(response => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(response);
        })
        .catch(err => next(err));
  });

module.exports = portfolioRouter;
