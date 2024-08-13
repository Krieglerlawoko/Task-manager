const express = require('express');
const { dbConfig } = require('./config'); // Import dbConfig from the config
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import routes
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Import middleware
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware setup
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Connect to MongoDB
dbConfig(); // Use dbConfig from the config

// Routes
app.use('/api/tasks', taskRoutes); // Task routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/users', userRoutes); // User routes

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
