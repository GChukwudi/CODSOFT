
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

exports.signup = async (req, res, next) => {
    const { email } = req.body;
    // Check if user Exists
    const userExist = await User.findOne({ email });
    if (userExist){
        return next(new ErrorResponse('Email already exists', 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
}

exports.signin = async (req, res, next) => {
    try {
         const { email, password } = req.body;
         // Check if user exists
        if (!email) {
            return next(new ErrorResponse('Please provide an email', 403));
        }
        if (!password) {
            return next(new ErrorResponse('Please provide a password', 403));
        }
        // Check if user email
        const user = await User.findOne({ email });
        if(!user) {
            return next(new ErrorResponse('Invalid credentials', 400));
        }

        // check password
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse('Invalid credentials', 400));
        }

        // Create token
        sendTokenResponse(user, 200, res);


    } catch (error) {
        next(error);
    }
}

const sendTokenResponse = async (user, statusCode, res) => {
    // Create token
    const token =  await user.getSignedJwtToken();
    res
        .status(statusCode)
        .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .json({
            success: true,
            token,
            user
        });
}


// logout user
exports.logout = async (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: 'User logged out'
    });
}

// user profile
exports.userProfile = async (req, res, next) => {

    const user = await User.findById(req.user.id).select('-password');

    res.status(200).json({
        success: true,
        user: req.user,
        // message: 'User profile'
    });
}
