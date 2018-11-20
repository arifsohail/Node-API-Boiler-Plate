const express = require('express');
const middleware = require('./Middleware');
const config = require('./config');
const {API_VERSION} = config;
const router = new express.Router();

// for confirmation of webhook
router.post(`/api/${API_VERSION}/call`, middleware.called);

module.exports = router;