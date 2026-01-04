const express = require('express')
const cors = require('cors')
const debug = require('debug')('app:main')

const { config } = require('./src/config/configIndex')
const { productsApi } = require('./src/products/productsIndex')
const { usersApi } = require('./src/users/userIndex')
const { avaliableRoutes, invalidRoutes } = require('./src/indexRoutes/indexRoutes')

const app = express()
app.use(express.json())
app.use(cors())
avaliableRoutes(app)
usersApi(app)
productsApi(app)
invalidRoutes(app)

app.listen(config.port, () => {
  debug('Listening on port http://localhost:' + config.port)
})
