const express = require("express");
const Contact = require("../models/contact");
const authenticate = require("../authenticate");
const cors = require("./cors");

const contactRouter = express.Router();

contactRouter
  .route("/")
  .get((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(input);
  })
  .post("/contactus", authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
  })
  .put("/contatctus", authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.setHeader("Content-Type", "application/json");
  })
  .delete("/contactus", authenticate.verifyUser, (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
  });

module.exports = contactRouter;
