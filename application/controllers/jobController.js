const Job = require('../models/jobModel');
const ErrorResponse = require('../utils/errorResponse');
const JobType = require('../models/jobTypeModel');


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
    // enable search
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {};

    // filter by job category
    let ids = [];
    const jobTypeCategory = await JobType.find({}, '_id:1');
    JobTypeCategory.forEach(cat => {
        ids.push(cat._id);
    });

    let cat = req.query.cat;
    let categ = cat !== '' ? cat : ids;

    // search by job loxation
    let location = [];
    const jobLocation = await Job.find({}, { location: 1 });
    jobLocation.forEach(loc => {val => {
        location.push(val.location);
    }});


    // enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    // const count = await Job.find({}).estimatedDocumentCount();
    const count = await Job.find({ ...keyword, JobType: categ }).countDocuments();

    try {
        const job = await Job.find({ ...keyword }).skip(pageSize * (page - 1)).limit(pageSize);
        res.status(200).json({
            success: true,
            job,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            location,
        });
    } catch (error) {
        next(error);
    }
}

