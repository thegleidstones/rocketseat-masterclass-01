const express = require('express')
const AddressController = require('./controllers/AddressController')
const UserController = require('./controllers/UserController')
const TechController = require('./controllers/TechController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.list)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.list)

routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.list)
routes.delete('/users/:user_id/techs', TechController.delete)

module.exports = routes