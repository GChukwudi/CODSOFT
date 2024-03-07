const express = require('express');
const { sign } = require('jsonwebtoken');
const router = express.Router();

// auth routes
router.get('/', signin)

module.exports = router;