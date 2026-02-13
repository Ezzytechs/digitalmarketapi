const isProduction = process.env.NODE_ENV === "production";

const FRONTEND_URL = "https://digitalmarketsqure.com";
const API_URL = "https://digitalmarketsqure.vercel.app";

module.exports = {
  contentSecurityPolicy: isProduction
    ? {
        useDefaults: true,
        directives: {
          /**
           * Default
           */
          defaultSrc: ["'self'"],

          /**
           * Scripts
           */
          scriptSrc: ["'self'", "https://checkout.flutterwave.com"],

          /**
           * Styles
           */
          styleSrc: ["'self'", "'unsafe-inline'", FRONTEND_URL],

          /**
           * Images / previews
           */
          imgSrc: [
            "'self'",
            FRONTEND_URL,
            "data:",
            "blob:",
            "https://checkout.flutterwave.com",
            "https://mega.nz",
            "https://g.api.mega.co.nz",
          ],

          /**
           * Fonts
           */
          fontSrc: ["'self'", FRONTEND_URL, "data:"],

          /**
           * API / Fetch / Uploads / Downloads
           */
          connectSrc: [
            "'self'",
            FRONTEND_URL,
            API_URL,

            // Flutterwave
            "https://api.flutterwave.com",

            // CurrencyFreaks
            "https://api.currencyfreaks.com",

            // Resend
            "https://api.resend.com",

            // MEGA
            "https://api.mega.nz",
            "https://g.api.mega.co.nz",
          ],

          /**
           * Media (file downloads / streaming)
           */
          mediaSrc: ["'self'", "blob:", "https://g.api.mega.co.nz"],

          /**
           * Iframes (Flutterwave checkout)
           */
          frameSrc: ["'self'", "https://checkout.flutterwave.com"],

          /**
           * Prevent embedding
           */
          frameAncestors: ["'none'"],

          /**
           * Disable plugins
           */
          objectSrc: ["'none'"],

          /**
           * Force HTTPS
           */
          upgradeInsecureRequests: [],
        },
      }
    : false,

  /**
   * Clickjacking protection
   */
  frameguard: { action: "deny" },

  /**
   * Prevent MIME sniffing
   */
  noSniff: true,

  /**
   * XSS protection (legacy)
   */
  xssFilter: true,

  /**
   * HSTS
   */
  hsts: isProduction
    ? {
        maxAge: 63072000,
        includeSubDomains: true,
        preload: true,
      }
    : false,

  /**
   * Hide X-Powered-By
   */
  hidePoweredBy: true,

  /**
   * Referrer Policy
   */
  referrerPolicy: {
    policy: "strict-origin-when-cross-origin",
  },

  /**
   * Permissions Policy
   */
  permissionsPolicy: {
    features: {
      geolocation: [],
      microphone: [],
      camera: [],
      payment: [],
      usb: [],
      fullscreen: ["self"],
    },
  },

  /**
   * DNS Prefetch
   */
  dnsPrefetchControl: { allow: false },

  /**
   * Cross-origin policies
   */
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: { policy: "same-origin" },
  crossOriginResourcePolicy: { policy: "cross-origin" },
};
