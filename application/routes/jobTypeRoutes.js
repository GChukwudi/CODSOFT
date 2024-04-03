const express = require('express');
const router = express.Router();
const { createJobType, allJobTypes, updateJobType } = require('../controllers/jobTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


// jobType routes

// /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createJobType)

// /api/type/jobs
router.get('/type/jobs', allJobTypes)
// /api/type/update/:id
router.put('/type/update/:id', isAuthenticated, isAdmin, updateJobType)

module.exports = router;