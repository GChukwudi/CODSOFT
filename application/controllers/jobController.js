const Job= require('../models/jobModel');
const ErrorResponse = require('../utils/errorResponse');


// create job
exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            JobType: req.body.JobType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
}

// single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        });
    }
    catch (error) {
        next(error);
    }
}

// update job
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.jobId, req.body, {new: true}).populate('JobType, jobTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            success: true,
            job
        });
    }
    catch (error) {
        next(error);
    }
}

