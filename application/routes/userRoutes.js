const express = require('express');
const router = express.Router();
const { allUsers } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/auth');


// user routes

// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers);

module.exports = router;
