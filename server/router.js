const express = require('express')

const routes = express.Router();

const PropertiesController = require('./controllers/propertiesController')

// padrão rest

routes.get('/properties', PropertiesController.read)
routes.post('/properties', PropertiesController.post)
routes.delete('/properties/:id', PropertiesController.delete)
routes.post('/properties/:id', PropertiesController.update)

routes.get('/', (request, response) => {
    return response.json({
        nome: "Vitor",
        sobrenome: "Emanuel"
    })
})

module.exports = routes