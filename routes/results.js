let express = require('express');
let router = express.Router();

let ResultController = require("../Controller/Result")
let UserController = require("../Controller/User")


//CREATE DATA
router.post('/create',UserController.secure, ResultController.ResultCreate);


//ALL DATA FIND
router.get('/find', UserController.secure, ResultController.FindData);


//FIND ONE
router.get('/findid/:id', UserController.secure, ResultController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, ResultController.ResultDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, ResultController.ResultUpdate);


module.exports = router;

