const express = require("express");
require("./cars-middleware");
const Cars = require("./cars-model");
const { checkCarId } = require("./cars-middleware");

const router = express.Router();

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then (cars => {
            res.status(200).json(cars)
        })
        .catch(next)
}) 

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.car)
})

module.exports = router;
