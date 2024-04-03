const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');


// create job category
exports.createJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobT
        });
    } catch (error) {
        next(error);
    }
}

// get all job categories
exports.allJobTypes = async (req, res, next) => {
    try {
        const jobT = await JobType.find();
        res.status(200).json({
            success: true,
            jobT
        });
    }
    catch (error) {
        next(error);
    }
}

// update job type
exports.updateJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            success: true,
            jobT
        });
    } catch (error) {
        next(error);
    }
}

// delete job type
exports.deleteJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Job type deleted successfully',
            // jobT
        });
    }
    catch (error) {
        next(new ErrorResponse('Server error', 500));
    }
}
