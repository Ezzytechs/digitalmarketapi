const http = require("http");
const app = require("../app");
const connectDB = require("../configs/db");
const { PORT } = require("../configs/env");

const server = http.createServer(app);

connectDB();
// Start server
server.listen(PORT, () => {
  console.log(`Worker ${process.pid} running on PORT:${PORT}`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// Catch unhandled errors
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
