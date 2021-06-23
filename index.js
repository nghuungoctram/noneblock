const express = require('express');

let index = express();
let testRouter = require('./routes/test');

index.get('/', (req, res, next) => {
    res.status(200).json({
        status: "SUCCESS",
        errors: null,
        data: {
            result: "WELCOME"
        }
    });
});

index.use('/', testRouter);

index.use("*", (req, res, next) => {
    res.status(404).json({
        status: "SUCCESS",
        errors: [
            {
                code: 404,
                message: "Api not found"
            }
        ],
        data: null
    });
});

module.exports = index;