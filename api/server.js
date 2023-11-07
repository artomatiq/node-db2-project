const express = require("express");
const CarsRouter = require("./cars/cars-router");

const server = express();

server.use(express.json());

server.use("/api/cars", CarsRouter);

server.use("*", (req, res, next) => {
    next({
        status: 404,
        message: 'not found'
    })
});

server.use( (error, req, res, next) => {
    res.status = error.status || 500,
    res.json({
        message: error.message || 'error in Cars router',
        stack: error.stack
    })
})

module.exports = server;
