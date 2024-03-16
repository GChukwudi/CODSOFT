const express = require('express');
const { signup, signin, logout } = require('../controllers/authcontrollers');
const router = express.Router();

// auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);

module.exports = router;