const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/environment");
const connectDB = require("./config/database");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const { generalLimiter } = require("./middleware/rateLimiter");

const app = express();
connectDB();

// trust proxy for accurate client IP addresses (important for rate limiting)
app.set("trust proxy", 1);

// security middleware
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

// cors configuration
app.use(
  cors({
    origin: config.allowedOrigins,
    credentials: true,
  })
);

// rate limiting
app.use(generalLimiter);

// body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Request logging middleware (development only)
if (config.nodeEnv === "development") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
  });
}

// API routes
app.use("/api", routes);

// root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend API is running!",
    version: "1.0.0",
    environment: config.nodeEnv,
    timestamp: new Date().toISOString(),
  });
});

// handle 404 for non-api routes
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

// global error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
