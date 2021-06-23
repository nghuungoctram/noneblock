const express = require("express");
const router = express.Router();

// let data = {
//     id: 1,
//     startTime: 0,
//     endTime: 120
// } // postman

router.get('/', function (req, res, next) {

    function handler(input) {
        var temp = 0;
        while (req.startTime < req.endTime && temp++ < 1440) {
            let noneblock = req.endTime + input;
            console.log("none block time is: " + req.endTime + "to" + noneblock);
        }
    }
    handler();
});

module.exports = router;