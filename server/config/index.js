// Configuration settings for the TaskMaster application

module.exports = {
  // Database configuration
  db: {
    uri: 'mongodb://localhost:27017/taskmaster', // MongoDB URI for local development
  },
  
  // Server configuration
  server: {
    port: process.env.PORT || 5000, // Port number for the server
  },
  
  // JWT configuration for authentication
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret_key', // Secret key for JWT
    expiresIn: '1h', // Token expiration time
  },
  
  // Email configuration (if using SendGrid or another service)
  email: {
    service: 'SendGrid', // Example service name
    apiKey: process.env.SENDGRID_API_KEY || 'your_sendgrid_api_key', // API key for email service
  },
  
  // Other configuration settings can go here
};
