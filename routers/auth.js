const express = require('express');

const routes = express.Router();
const router = require('./adminRoutes.js');

routes.use('/admin', router);


module.exports = routes;