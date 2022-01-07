const express = require('express');
const servicesRouter = express.Router();

servicesRouter.route('/').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get("/services", (req, res) => {
  res.statusCode = 200;
  res.end("Loading /services to you right now!");
})
.post("/services", (req, res) => {
  res.statusCode = 403;
  res.end("POST operation not supported for /services");
})
.put("/services", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported for /services");
})
.delete("/services", (req, res) => {
  res.statusCode = 403;
  res.end("DELETE operation not supported for /services");
})
servicesRouter.route('/services')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
        })
.get("/services/:serviceId", (req, res) => {
  res.statusCode = 200;
  res.end("Loading /services/:serviceId to you right now!");
})
.post("/services/:serviceId", (req, res) => {
  res.write(`Posting /services request ${req.params.serviceId}\n`);
  res.end(
    `Will update /services calendar: ${req.body.name} with ${req.body.description}`
  );
})
.put("/services/:serviceId", (req, res) => {
  res.write(`Updating the services request: ${req.params.serviceId}\n`);
  res.end(
    `Will update the services request : ${req.body.name} with description: ${req.body.description}`
  );
})
.delete("/services/:serviceId", (req, res) => {
  res.end(`Deleting services request: ${req.params.serviceId}`);
});