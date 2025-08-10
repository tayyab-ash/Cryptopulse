const app = require("./app");
const config = require("./config/environment");

const PORT = config.port;

// Start server
const server = app.listen(PORT, () => {
  console.log(`
🚀 Server is running!
📍 Port: ${PORT}
🌍 Environment: ${config.nodeEnv}
📊 Database: ${config.mongoUri.includes("localhost") ? "Local MongoDB" : "Remote MongoDB"}
🕒 Started at: ${new Date().toISOString()}
📋 API Docs: http://localhost:${PORT}/api/health
  `);
});

// gaceful shutdown
process.on("SIGTERM", () => {
  console.log("\n🛑 SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Process terminated");
  });
});

process.on("SIGINT", () => {
  console.log("\n🛑 SIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Process terminated");
  });
});

// handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.error("❌ Unhandled Promise Rejection:", err.message);
  server.close(() => {
    process.exit(1);
  });
});

// handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err.message);
  console.error(err.stack);
  process.exit(1);
});

module.exports = server;
