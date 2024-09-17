let Result = require('../Models/result')

exports.ResultCreate = async function (req, res, next) {
    try {

        let ResultCreate = await Result.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Result Create SuccessFully!",
            data: ResultCreate
            
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

        let ResultData = await Result.find().populate("studentId").populate("examId")

        res.status(200).json({
            status: "Success",
            message: "Result Found SuccessFully!",
            data: ResultData

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

        let ResultFind = await Result.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Result Find SuccessFully!",
            data: ResultFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ResultDelete = async function (req, res, next) {
    try {

        await Result.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Result Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ResultUpdate = async function (req, res, next) {
    try {

        console.log(req.body);

        let ResultUpdate = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(ResultUpdate);

        res.status(200).json({
            status: "Success",
            message: "Result Update SuccessFully!",
            data: ResultUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
