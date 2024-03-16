const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {}
}