var express = require('express');
var router = express.Router();


/* GET calculate listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doAddition', function (req, res, next) {
console.log("here");
    var input1 = req.body.input1;
    var input2 = req.body.input2;

    if (!isNaN(input1) && !isNaN(input1)) {
        var response = {result : numeral(Number(input1) + Number(input2)).format('0[.]0[00]')};
        res.send(response);
    } else {
        var response = {result : "Please Enter valid inputs"};
        res.send(response);
    }
    // // Just checking if the username is in our user's array
    // var theUser = users.filter(function(user){
    //     return user.username === reqUsername;
    // });
    //
    // // Check the password
    // if(theUser.length === 1){
    //     theUser[0].password === reqPassword &&
    //     res.status(201).json({message: "Login successful"}) ||
    //     res.status(401).json({message: "Login failed"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }


    // if(theUser.password === reqPassword){
    //     res.status(201).json({message: "Login successful"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }

});

module.exports = router;