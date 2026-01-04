const express = require('express')
const { usersController } = require('./controller')

const router = express.Router()

module.exports.usersApi = app => {
  router
    .get('/', usersController.getusers)
    .post('/', usersController.createuser)
    .get('/:id', usersController.getuserById)
    .put('/:id', usersController.updateuser)
    .delete('/:id', usersController.deleteuser)

  app.use('/api/users', router)
}
