// Utility functions for consistent API responses

const formatSuccess = (message = "Success", data = null, statusCode = 200) => {
  const response = {
    success: true,
    message,
    timestamp: new Date().toISOString(),
  };

  if (data !== null) {
    response.data = data;
  }

  return response;
};

const formatError = (
  message = "An error occurred",
  error = null,
  statusCode = 500
) => {
  const response = {
    success: false,
    message,
    timestamp: new Date().toISOString(),
  };

  if (error && process.env.NODE_ENV === "development") {
    response.error = error;
  }

  return response;
};

const formatValidationError = (errors) => {
  return {
    success: false,
    message: "Validation failed",
    errors,
    timestamp: new Date().toISOString(),
  };
};

module.exports = {
  formatSuccess,
  formatError,
  formatValidationError,
};
