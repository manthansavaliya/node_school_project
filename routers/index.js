const express = require('express');

const routes = express.Router();
const router = require('./auth.js');

routes.use('/auth', router);

module.exports = routes;