const { ObjectId } = require('mongodb')
const { dataBase } = require('../dataBases/dataIndex')

const COLLECTIONS = 'users'

const getAll = async () => {
  const collection = await dataBase(COLLECTIONS)
  return await collection.find({}).toArray()
}

const getById = async id => {
  const collection = await dataBase(COLLECTIONS)
  return collection.findOne({ _id: new ObjectId(id) })
}

const create = async product => {
  const collection = await dataBase(COLLECTIONS)
  const result = await collection.insertOne(product)
  return result.insertedId
}

const update = async (id, product) => {
  const collection = await dataBase(COLLECTIONS)
  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: product })
  return result.modifiedCount
}

const deleteById = async id => {
  const collection = await dataBase(COLLECTIONS)
  const result = await collection.deleteOne({ _id: new ObjectId(id) })
  return result.deletedCount
}

module.exports.userService = {
  getAll,
  getById,
  create,
  update,
  deleteById
}
