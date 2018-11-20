'use strict';
const body_parser = require('body-parser');
const express = require('express');
const config = require('./config');
const router = require('./Router');
const {
  PORT,
} = config;

const app = express().use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(router);
const log = (req, res, next) => {
  console.log(req.originalUrl, req.ip);
  next();
};
app.use(log);
app.use(express.static('static'));

// Sets server port and logs message on success
const server = app.listen(PORT, () => console.log('Webhook is listening on 1337'));

module.exports =  {
  app,
  server,
};
