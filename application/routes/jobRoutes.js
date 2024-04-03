
const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobController');


// jobType routes
// /api/job/create
router.post('/job/create', isAuthenticated, isAdmin, createJob)
// /api/job/id
router.get('/job/:id', singleJob)
// /api/job/update/jobId
router.put('/job/update/:jobId', isAuthenticated, isAdmin, updateJob)
// /api/job/show
router.get('/job/show', showJobs)


module.exports = router;