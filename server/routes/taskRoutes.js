const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

// Create a new task
router.post('/tasks', TaskController.createTask);

// Get all tasks
router.get('/tasks', TaskController.getAllTasks);

// Get a single task by ID
router.get('/tasks/:id', TaskController.getTaskById);

// Update a task by ID
router.put('/tasks/:id', TaskController.updateTaskById);

// Delete a task by ID
router.delete('/tasks/:id', TaskController.deleteTaskById);

module.exports = router;
