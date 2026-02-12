const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const routes = require("./routes");
const corsConfig = require("./configs/cors");
const errorHandler = require("./middlewares/error.middleware");
const notFound = require("./middlewares/notFound.middleware");
const helmetConfig = require("./configs/helmet");
const rateLimitConfig = require("./configs/rateLimiter");
const app = express();

// Trust proxy for rate limiting
app.set("trust proxy", 1);
// Security & performance
app.use(helmet(helmetConfig));
// Compression
app.use(compression());
// CORS
app.use(cors(corsConfig));
// Rate limiting
app.use(rateLimitConfig.limiter);
// Logging
app.use(morgan("dev"));
// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.send(`Hello from worker ${process.pid}`);
});

// Routes
app.use("/api/v1", routes);

// Errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;
