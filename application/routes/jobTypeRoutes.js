const express = require('express');
const router = express.Router();
const { createJobType, allJobTypes, updateJobType } = require('../controllers/jobTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


// jobType routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)

// /api/type/jobs
router.get('/type/jobs', allJobTypes)
// /api/type/update/:id
router.put('/type/update/:id', isAuthenticated, updateJobType)
// /api/type/delete/:id
router.delete('/type/delete/:id', isAuthenticated, deleteJobType)

module.exports = router;