// services/api.js

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Fetch all tasks
export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
};

// Fetch a single task by ID
export const fetchTaskById = async (taskId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch task');
  }
  return response.json();
};

// Create a new task
export const createTask = async (taskData) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return response.json();
};

// Update an existing task by ID
export const updateTask = async (taskId, taskData) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
  return response.json();
};

// Delete a task by ID
export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
  return response.json();
};

// Fetch tasks by user ID (for example, tasks assigned to a specific user)
export const fetchTasksByUserId = async (userId) => {
  const response = await fetch(`${API_URL}/tasks/user/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks for user');
  }
  return response.json();
};

// Fetch tasks by status (e.g., completed, pending)
export const fetchTasksByStatus = async (status) => {
  const response = await fetch(`${API_URL}/tasks/status/${status}`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks by status');
  }
  return response.json();
};
