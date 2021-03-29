const express = require('express')
const AddressController = require('./controllers/AddressController')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.list)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.list)

module.exports = routes