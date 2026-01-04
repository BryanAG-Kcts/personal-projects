const express = require('express')
const createError = require('http-errors')
const { response } = require('../common/response')

module.exports.avaliableRoutes = app => {
  const router = express.Router()

  router.get('/', (req, res) => {
    const menu = {
      products: `https://${req.headers.host}/api/products`,
      users: `https://${req.headers.host}/api/users`
    }

    response.success(res, 200, 'API Inventario', menu)
  })

  app.use('/', router)
}

module.exports.invalidRoutes = app => {
  const router = express.Router()

  router.all('*', (req, res) => {
    response.error(res, new createError.NotFound())
  })

  app.use('/', router)
}
