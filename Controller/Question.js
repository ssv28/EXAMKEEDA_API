let Question = require('../Models/question')

exports.QuestionCreate = async function (req, res, next) {
    try {

        let QuestionCreate = await Question.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Question Create SuccessFully!",
            data: QuestionCreate
            
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

        let QuestionData = await Question.find().populate("examId")

        res.status(200).json({
            status: "Success",
            message: "Question Found SuccessFully!",
            data: QuestionData

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

        let QuestionFind = await Question.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Question Find SuccessFully!",
            data: QuestionFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.QuestionDelete = async function (req, res, next) {
    try {

        await Question.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Question Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.QuestionUpdate = async function (req, res, next) {
    try {

        console.log(req.body);

        let QuestionUpdate = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(QuestionUpdate);

        res.status(200).json({
            status: "Success",
            message: "Question Update SuccessFully!",
            data: QuestionUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
