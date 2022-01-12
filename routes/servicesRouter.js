const express = require("express");
const servicesRouter = express.Router();

servicesRouter
  .route("/")
  .get((req, res) => {
    res.statusCode = 200;
    res.end("Loading /services to you right now!");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported for /services");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported for /services");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported for /services");
  });
  
servicesRouter
  .route("/:servicesId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.statusCode = 200;
    res.end("Loading /services/:serviceId to you right now!");
  })
  .post((req, res) => {
    res.write(`Posting /services request ${req.params.serviceId}\n`);
    res.end(
      `Will update /services calendar: ${req.body.name} with ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the services request: ${req.params.serviceId}\n`);
    res.end(
      `Will update the services request : ${req.body.name} with description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Deleting services request: ${req.params.serviceId}`);
  });

module.exports = servicesRouter;