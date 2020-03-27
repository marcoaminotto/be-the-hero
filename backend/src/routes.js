const express = require('express');

const NgoController = require('./controllers/NgoController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
routes.post('/sessions', SessionController.create);

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;