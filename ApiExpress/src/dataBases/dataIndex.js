const { MongoClient } = require('mongodb')
const debug = require('debug')('app:dataBase')
const { config } = require('../config/configIndex')

let connection = null

module.exports.dataBase = collection => new Promise(async (resolve, reject) => {
  try {
    if (!connection) {
      const client = new MongoClient(config.mongoUrl)
      connection = await client.connect()
      debug('New connection to database')
    }

    const db = await connection.db(config.mongoName)
    resolve(db.collection(collection))
    debug('Connected to database')
  } catch (error) {
    debug(error)
    reject(error)
  }
})
