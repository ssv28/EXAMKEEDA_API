let Exam = require('../Models/exam')

exports.ExamCreate = async function (req, res, next) {
    try {

        let ExamCreate = await Exam.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Exam Create SuccessFully!",
            data: ExamCreate
            
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindData = async function (req, res, next) {
    try {

        let ExamData = await Exam.find().populate("createdBy")

        res.status(200).json({
            status: "Success",
            message: "Exam Found SuccessFully!",
            data: ExamData

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindId = async function (req, res, next) {
    try {

        let ExamFind = await Exam.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Exam Find SuccessFully!",
            data: ExamFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ExamDelete = async function (req, res, next) {
    try {

        await Exam.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Exam Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ExamUpdate = async function (req, res, next) {
    try {

        console.log(req.body);

        let ExamUpdate = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(ExamUpdate);

        res.status(200).json({
            status: "Success",
            message: "Exam Update SuccessFully!",
            data: ExamUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
