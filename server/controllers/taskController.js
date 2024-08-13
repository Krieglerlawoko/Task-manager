const Task = require('../models/Task');

const createTask = async (req, res) => {
  const { title, description, deadline, priority } = req.body;
  try {
    const task = new Task({ title, description, deadline, priority, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTask, getTasks };
