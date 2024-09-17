let express = require('express');
let router = express.Router();

let ExamController = require("../Controller/Exam")
let UserController = require("../Controller/User")


//CREATE DATA
router.post('/create',UserController.secure, ExamController.ExamCreate);


//ALL DATA FIND
router.get('/find', UserController.secure, ExamController.FindData);


//FIND ONE
router.get('/findid/:id', UserController.secure, ExamController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, ExamController.ExamDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, ExamController.ExamUpdate);


module.exports = router;

