const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const authenticate = require("../authenticate");

const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.user) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(user);
  } else {
    const err = new Error("You are not authorized to perform this operation!");
    err.status = 403;
    return next(err);
  }
});

router.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        const err = new Error(`User ${req.body.username} already exists!`);
        err.status = 403;
        return next(err);
      } else {
        User.create({
          username: req.body.username,
          password: req.body.password
        })
          .then(user => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ status: 'Registration Successful!', user: user });
          })
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));
});
    
router.post("/login", passport.authenticate("local"), (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    token: token,
    status: "You are successfully logged in!",
  });
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie("session-id");
    res.redirect("/");
  } else {
    const err = new Error("You are not logged in!");
    err.status = 401;
    return next(err);
  }
});

module.exports = router;
