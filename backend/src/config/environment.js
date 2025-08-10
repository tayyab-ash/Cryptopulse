require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongoUri:
    process.env.MONGODB_URI || "mongodb://localhost:27017/backend_auth_db",
  jwtSecret: process.env.JWT_SECRET || "fallback_secret_key",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  allowedOrigins: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : ["http://localhost:3001"],
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000, // 15 minutes
  rateLimitMaxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12,
};

// validation
if (!config.jwtSecret || config.jwtSecret === "fallback_secret_key") {
  console.warn(
    "⚠️  Warning: Using default JWT secret. Please set JWT_SECRET in production!"
  );
}
if (!config.mongoUri) {
  console.error("❌ Error: MONGODB_URI is required");
  process.exit(1);
}

module.exports = config;
