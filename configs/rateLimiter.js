const { rateLimit } = require("express-rate-limit");

const isProduction = process.env.NODE_ENV === "production";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  ipv6Subnet: 48, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
});

// Creates a rate limiter middleware
const createRateLimiter = (maxAttempts = 100, minutes = 15) => {
  return rateLimit({
    windowMs: minutes * 60 * 1000, // 15 minutes
    limit: maxAttempts, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    ipv6Subnet: 48, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
    message: {
      success: false,
      message: "Too many requests from this IP, please try again later.",
    },
  });
};

module.exports = { limiter, createRateLimiter };
