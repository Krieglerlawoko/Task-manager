const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Get user profile
router.get('/users/:id', UserController.getUserProfile);

// Update user profile
router.put('/users/:id', UserController.updateUserProfile);

// Delete user account
router.delete('/users/:id', UserController.deleteUserAccount);

module.exports = router;
