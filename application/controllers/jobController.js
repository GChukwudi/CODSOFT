const Job = require('../models/jobModel');
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

// show all jobs
exports.showJobs = async (req, res, next) => {

    // enable pagination
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({}).estimatedDocumentCount();

    try {
        const job = await Job.find({}).populate('JobType', 'jobTypeName').populate('user', 'firstName lastName').limit(pageSize).skip(pageSize * (page - 1));
        res.status(200).json({
            success: true,
            job,
            page,
            pages: Math.ceil(count / pageSize),
            count
        });
    } catch (error) {
        next(error);
    }
}

