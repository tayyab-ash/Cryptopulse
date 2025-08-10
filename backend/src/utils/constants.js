// Application constants

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const MESSAGES = {
  USER_CREATED: "User registered successfully",
  LOGIN_SUCCESS: "Login successful",
  INVALID_CREDENTIALS: "Invalid email or password",
  USER_NOT_FOUND: "User not found",
  ACCOUNT_DEACTIVATED: "Account is deactivated",
  TOKEN_REQUIRED: "Access token is required",
  TOKEN_INVALID: "Invalid token",
  TOKEN_EXPIRED: "Token expired",
  EMAIL_EXISTS: "User with this email already exists",
  VALIDATION_FAILED: "Validation failed",
  SERVER_ERROR: "Internal server error",
  PROFILE_UPDATED: "Profile updated successfully",
  PASSWORD_CHANGED: "Password changed successfully",
  ACCOUNT_DEACTIVATED_SUCCESS: "Account deactivated successfully",
  LOGOUT_SUCCESS: "Logged out successfully",
  TOKEN_VALID: "Token is valid",
};

const VALIDATION_RULES = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
  },
  EMAIL: {
    MAX_LENGTH: 100,
  },
  PASSWORD: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 128,
  },
};

const JWT_CONFIG = {
  ALGORITHM: "HS256",
  ISSUER: "backend-auth-api",
};

module.exports = {
  HTTP_STATUS,
  MESSAGES,
  VALIDATION_RULES,
  JWT_CONFIG,
};
