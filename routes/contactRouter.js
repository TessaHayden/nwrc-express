const express = require('express');
const Contact = require('../models/contact');
const authenticate = require("../authenticate");
const cors = require("./cors");
const { findByIdAndUpdate } = require('../models/user');

const contactRouter = express.Router();

contactRouter.route('/')
    .get((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(input);
    })
    .post((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json")
    }).
    put((req, res) => {
        res.statusCode = 403;
        res.setHeader("Content-Type", "application/json");
    })
    .delete((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
    });

module.exports = contactRouter;