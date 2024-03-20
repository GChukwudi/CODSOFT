
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');
const { createJob } = require('../controllers/jobController');


// jobType routes

// /api/job/create
router.post('/job/create', isAuthenticated, createJob)


module.exports = router;