// /models/Question.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true
    },

    questionText: {
        type: String,
        required: true
    },

    options: [{
        type: String,
        required: true
    }],

    marks: {
        type: Number,
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);
