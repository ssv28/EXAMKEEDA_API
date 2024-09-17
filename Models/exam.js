// /models/Exam.js
const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    catagory: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    }, // in minutes

    totalMarks: {
        type: Number,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Exam', ExamSchema);
