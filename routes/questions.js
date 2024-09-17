let express = require('express');
let router = express.Router();

let QuestionController = require("../Controller/Question")
let UserController = require("../Controller/User")


//CREATE DATA
router.post('/create',UserController.secure, QuestionController.QuestionCreate);


//ALL DATA FIND
router.get('/find', UserController.secure, QuestionController.FindData);


//FIND ONE
router.get('/findid/:id', UserController.secure, QuestionController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, QuestionController.QuestionDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, QuestionController.QuestionUpdate);


module.exports = router;

