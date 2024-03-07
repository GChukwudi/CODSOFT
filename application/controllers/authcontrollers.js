const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

exports.signup = (req, res, next) => {
    const { email } = req.body;
    // Check if user Exists
    const userExist = await User.findOne({ email });
    if (userExist){
        return next(new ErrorResponse('Email already exists', 400));
    }
    try {
        const user = User.create(req.body);
        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
}