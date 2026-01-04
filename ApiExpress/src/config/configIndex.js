require('dotenv').config()

module.exports.config = {
  port: process.env.PORT,
  mongoUrl: process.env.urlDataBase,
  mongoName: process.env.nameDataBase
}
