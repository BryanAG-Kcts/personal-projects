const debug = require('debug')('app:module-products-controller')
const createError = require('http-errors')

const { productsService } = require('./services')
const { response } = require('../common/response')

module.exports.productsController = {

  getProducts: async (req, res) => {
    try {
      const products = await productsService.getAll()
      response.success(res, 200, 'Lista de productos obtenida', products)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  },
  getProductById: async (req, res) => {
    const { id } = req.params
    productsService.getById(id)
      .then(product => {
        response.success(res, 200, `producto ${id} obtenido correctamente`, product)
      })
      .catch(e => {
        debug(e)
        response.error(res, new createError.NotFound())
      })
  },
  createProduct: async (req, res) => {
    try {
      const { body } = req

      if (!body || Object.keys(body).length === 0) {
        response.error(res, new createError.BadRequest())
        return
      }

      const insertedId = await productsService.create(body)
      response.success(res, 201, 'producto creado correctamente', insertedId)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  },
  updateProduct: async (req, res) => {
    try {
      const id = req.params.id
      const { body } = req
      if (!body || Object.keys(body).length === 0) {
        response.error(res, new createError.BadRequest())
        return
      }

      const modifiedProduct = await productsService.update(id, body)
      response.success(res, 201, 'producto actualizado correctamente', modifiedProduct)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id

      const deleteProduct = await productsService.deleteById(id)
      response.success(res, 201, 'producto removido correctamente', deleteProduct)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  },
  generateReport: (req, res) => {
    try {
      productsService.generateReport('products', res)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  }
}
