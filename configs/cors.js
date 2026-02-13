const isProduction = process.env.NODE_ENV === "production";
const allowedOriginRegex = isProduction
  ? [
      /^https:\/\/digitalmarketsquare\.com$/,
      /^https:\/\/www\.digitalmarketsquare\.com$/,
      /^https:\/\/digitalmarketsquare-.*\.vercel\.app$/,
    ]
  : [
      /^http:\/\/localhost:3000$/,
      /^https:\/\/digitalmarketsquare\.com$/,
      /^http:\/\/127\.0\.0\.1:3000$/,
    ];

module.exports = {
  origin: function (origin, callback) {
    // Allow server-to-server, Postman, curl, health checks
    if (!origin) return callback(null, true);

    const allowed = allowedOriginRegex.some((regex) => regex.test(origin));

    if (allowed) {
      return callback(null, true);
    }

    console.error("❌ CORS blocked origin:", origin);
    callback(new Error(`CORS policy blocked: ${origin}`));
  },

  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
};
