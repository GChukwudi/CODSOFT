const express = require('express');
const { signup } = require('../controllers/authcontrollers');
const router = express.Router();

// auth routes
// /api/signup
router.post('/signup', signup);

module.exports = router;