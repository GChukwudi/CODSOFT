const express = require('express');
const router = express.Router();
const { createJobType } = require('../controllers/jobTypeController');
const { isAuthenticated } = require('../middleware/auth');


// jobType routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)

module.exports = router;