const express = require('express');
const sanyeca = require('../controller/Controller')
const routes = express.Router();

routes.get('/', sanyeca.index);
routes.post('/save', sanyeca.save);
routes.get('/display', sanyeca.display);

module.exports = routes;


