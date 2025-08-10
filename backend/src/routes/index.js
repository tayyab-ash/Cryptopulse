const express = require("express");
const authRoutes = require("./auth");

const router = express.Router();

// health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// api routes
router.use("/auth", authRoutes);

// catch-all for undefined routes
router.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
    path: req.originalUrl,
  });
});

module.exports = router;
