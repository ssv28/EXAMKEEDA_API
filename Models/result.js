// /models/Result.js
const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',  
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    },
    obtainedMarks: {
        type: Number,
        required: true
    },
    correctAnswers: {
        type: Number,
        required: true
    },
    incorrectAnswers: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pass', 'fail'],  
        required: true
    },
    resultDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Result', ResultSchema);
