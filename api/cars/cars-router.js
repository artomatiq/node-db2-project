const express = require("express");
require("./cars-middleware");
const Cars = require("./cars-model");

const router = express.Router();

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then (cars => {
            res.status(200).json(cars)
        })
        .catch(next)
}) 

module.exports = router;
