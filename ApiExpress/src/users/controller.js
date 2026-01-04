const debug = require('debug')('app:module-users-controller')
const createError = require('http-errors')

const { userService } = require('./services')
const { response } = require('../common/response')

module.exports.usersController = {

  getusers: async (req, res) => {
    try {
      const users = await userService.getAll()
      response.success(res, 200, 'Lista de useros obtenida', users)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  },
  getuserById: async (req, res) => {
    const { id } = req.params
    userService.getById(id)
      .then(user => {
        response.success(res, 200, `usero ${id} obtenido correctamente`, user)
      })
      .catch(e => {
        debug(e)
        response.error(res, new createError.NotFound())
      })
  },
  createuser: async (req, res) => {
    try {
      const { body } = req

      if (!body || Object.keys(body).length === 0) {
        response.error(res, new createError.BadRequest())
        return
      }

      const insertedId = await userService.create(body)
      response.success(res, 201, 'usero creado correctamente', insertedId)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  },
  updateuser: async (req, res) => {
    try {
      const id = req.params.id
      const { body } = req
      if (!body || Object.keys(body).length === 0) {
        response.error(res, new createError.BadRequest())
        return
      }

      const modifieduser = await userService.update(id, body)
      response.success(res, 201, 'usero actualizado correctamente', modifieduser)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  },
  deleteuser: async (req, res) => {
    try {
      const id = req.params.id

      const deleteuser = await userService.deleteById(id)
      response.success(res, 201, 'usero removido correctamente', deleteuser)
    } catch (e) {
      debug(e)
      response.error(res)
    }
  }
}
