
const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJob, singleJob, updateJob } = require('../controllers/jobController');


// jobType routes

// /api/job/create
router.post('/job/create', isAuthenticated, createJob)

// /api/job/id
router.get('/job/:id', singleJob)

// /api/job/update/jobId
router.put('/job/update/:jobId', isAuthenticated, updateJob)


module.exports = router;