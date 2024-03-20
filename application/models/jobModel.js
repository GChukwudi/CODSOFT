const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a job title'],
        maxlength: 70
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Please add a job description']
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    },
    location: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
    JobType: {
        type: ObjectId,
        ref: 'JobType',
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

}, {timestamps: true});

module.exports = mongoose.model('job', jobSchema);