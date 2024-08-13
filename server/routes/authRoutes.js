const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

// User registration
router.post('/register', AuthController.register);

// User login
router.post('/login', AuthController.login);

// User logout
router.post('/logout', AuthController.logout);

module.exports = router;
