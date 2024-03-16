const express = require('express');
const { signup, signin, logout, userProfile } = require('../controllers/authcontrollers');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');


// auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/me
router.get('/me', isAuthenticated, isAdmin, userProfile);

module.exports = router;