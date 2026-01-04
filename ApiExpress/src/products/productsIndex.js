const express = require('express')
const { productsController } = require('./controller')

const router = express.Router()

module.exports.productsApi = app => {
  router
    .get('/', productsController.getProducts)
    .post('/', productsController.createProduct)
    .get('/report', productsController.generateReport)
    .get('/:id', productsController.getProductById)
    .put('/:id', productsController.updateProduct)
    .delete('/:id', productsController.deleteProduct)

  app.use('/api/products', router)
}
