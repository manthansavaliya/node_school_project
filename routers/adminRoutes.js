const express = require('express');

const routes = express.Router();
const { signUp, signIn } = require('../controllers/adminControllers.js');
const router = require('./auth.js');

routes.use('/sign-up', signUp);
routes.use('/sign-in', signIn);

module.exports = routes;
