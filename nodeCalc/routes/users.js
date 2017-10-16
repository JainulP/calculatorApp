var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doAddition', function (req, res, next) {

        console.log("here");
        var input1 = req.body.input1;
        var input2 = req.body.input2;
        var operation = req.body.operation;


         // if (operation == '+') {
            if (!isNaN(input1) && !isNaN(input2)) {
                var response = {result: Number(input1) + Number(input2)};
                console.log(response);
                res.status(201).json(response);
            } else {
                var response = {result: "Please Enter valid inputs"};
                res.json(response);
            }
        // }

    });
router.post('/doSubtraction', function (req, res, next) {

    console.log("here");
    var input1 = req.body.input1;
    var input2 = req.body.input2;
    var operation = req.body.operation;


    // if (operation == '-') {
        if (!isNaN(input1) && !isNaN(input2)) {
            var response = {result: Number(input1) - Number(input2)};
            console.log(response);
            res.status(201).json(response);
        } else {
            var response = {result: "Please Enter valid inputs"};
            res.json(response);
        }
   //}
});
router.post('/doMultiplication', function (req, res, next) {

    console.log("here");
    var input1 = req.body.input1;
    var input2 = req.body.input2;
    var operation = req.body.operation;
    console.log(operation);
    console.log(operation + input1 + input2);


    // if (operation == '*') {
        if (!isNaN(input1) && !isNaN(input2)) {
            var response = {result: Number(input1) * Number(input2)};
            console.log(response);
            res.status(201).json(response);
        } else {
            var response = {result: "Please Enter valid inputs"};
            res.json(response);
        }
    //}

});
router.post('/doDivision', function (req, res, next) {

    console.log("here");
    var input1 = req.body.input1;
    var input2 = req.body.input2;
    var operation = req.body.operation;


    //if (operation == '/') {
        if (!isNaN(input1) && !isNaN(input2)) {
            if(input2 == 0)
            {
                var response = {result: "Division by zero not possible"};
                console.log(response);
                res.status(201).json(response);
            }
            else {
                var response = {result: Number(input1) / Number(input2)};
                console.log(response);
                res.status(201).json(response);
            }
        } else {
            var response = {result: "Please Enter valid inputs"};
            res.json(response);
        }

});


module.exports = router;
