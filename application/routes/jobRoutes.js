
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobController');


// jobType routes
// /api/job/create
router.post('/job/create', isAuthenticated, createJob)
// /api/job/id
router.get('/job/:id', singleJob)
// /api/job/update/jobId
router.put('/job/update/:jobId', isAuthenticated, updateJob)
// /api/job/show
router.get('/job/show', showJobs)


module.exports = router;