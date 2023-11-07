const db = require('../../data/db-config')

const getAll = async () => {
  const cars = await db('cars')
  
  return cars
}

const getById = async (id) => {
  const car = await db('cars')
    .where('id', id)
    .first()

  return car
}

const getByVin = async (vin) => {
  const car = await db('cars')
    .where('vin', vin)
    .first()

  return car
}

const create = async (car) => {
  const newID = await db('cars')
    .insert(car)

  return getById(newID)
}

module.exports = {
  getAll, getById, create, getByVin
}
