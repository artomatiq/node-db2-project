const db = require('../../data/db-config')
const Cars = require('./cars-model')
const vin = require('vin-validator');

const checkCarId = async (req, res, next) => {
  const car = await Cars.getById(req.params.id)

  if (!car) {
    next({
      status: 404,
      message: `car with id ${req.params.id} is not found`
    })
  }
  else {
    req.car = car
    next()
  }
}

const checkCarPayload = async (req, res, next) => {
  const {vin, make, model, mileage} = req.body
  const error = {status: 400}

  if (!vin) {
    error.message = 'vin is missing'
  }
  if (!make) {
    error.message = `make is missing`
  }
  if (!model) {
    error.message = `model is missing`
  }
  if (!mileage) {
    error.message = `mileage is missing`
  }
  if (error.message) {
    next(error)
  }
  else {
    next()
  }


}

const checkVinNumberValid = (req, res, next) => {
  const vinValid = vin.validate(req.body.vin)

  if (vinValid) {
    next()
  }
  else {
    next({status: 400, message: `vin ${req.body.vin} is invalid`})
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const exists = await Cars.getByVin(req.body.vin)
  
  if (exists) {
    next({status:400, message: `vin ${req.body.vin} already exists`})
  }
  else next()
}

module.exports = {
  checkCarId, 
  checkCarPayload, 
  checkVinNumberValid, 
  checkVinNumberUnique
}
