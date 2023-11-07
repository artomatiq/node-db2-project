const db = require('../../data/db-config')

const getAll = async () => {
  const cars = await db('cars')
  
  return cars
}

const getById = async (id) => {
  // DO YOUR MAGIC
}

const create = async (car) => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll, getById, create
}
