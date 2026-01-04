const createError = require('http-errors')

module.exports.response = {
  success: (res, status = 200, message = 'Succes', body = {}) => {
    res.status(status).json({ message, body })
  },
  error: (res, error = null) => {
    const { statusCode, message } = error ?? new createError.InternalServerError()
    res.status(statusCode).json({ message })
  }

}
