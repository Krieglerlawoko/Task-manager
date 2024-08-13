const errorMiddleware = (err, req, res, next) => {
  // Log the error for debugging (you might want to use a logging service in production)
  console.error('Error details:', err);

  // Determine the status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred';

  // Respond with the error details
  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { // Optional: Include stack trace in development
      stack: err.stack
    })
  });
};

module.exports = errorMiddleware;
