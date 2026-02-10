# Digitradia Server

The backend server for Digitradia, a platform for digital assets and services. Built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Security**: Helmet, Express Rate Limit, BcryptJS, JWT
- **Email**: Nodemailer, Resend
- **Storage**: MegaJS
- **Validation**: Express Validator
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

- **Development**:
  ```bash
  npm run dev
  ```
- **Production**:
  ```bash
  npm start
  ```

## ⚙️ Environment Variables

Create a `.env` file in the root of the `server` directory and add the following:

```env
PORT=4000
NODE_ENV=development
MONGO_URI=your_mongodb_uri
JWT_ACCESS_TOKEN=your_access_token_secret
JWT_REFRESH_TOKEN=your_refresh_token_secret
ENCRYPTION_SECRET=your_encryption_secret
SITE_EMAIL=your_email
SITE_SUPPORT_EMAIL=your_support_email
SITE_PHONE=your_phone
MEGA_PASSWORD=your_mega_password
FLW_SECRET_KEY=your_flutterwave_secret
LOCAL_CURRENCY_API_KEY=your_currency_api_key
RESEND_API_KEY=your_resend_api_key
MAIL_FROM_EMAIL=your_mail_from_email
```

## 📂 Project Structure

- `api/`: Vercel serverless functions entry point.
- `configs/`: Configuration files (Database, Helmet, CORS, etc.).
- `controllers/`: Business logic for various features.
- `middlewares/`: Custom Express middlewares (Auth, Error handling).
- `models/`: Mongoose schemas.
- `routes/`: API route definitions.
- `utils/`: Utility functions and helper classes.
- `validators/`: Input validation logic.

## 🛣️ API Endpoints (v1)

Base URL: `/api/v1`

- `/auth`: User registration, login, and authentication.
- `/users`: User profile management.
- `/assets`: Digital asset management.
- `/blog`: Blog posts and content.
- `/cart`: Shopping cart operations.
- `/category`: Asset categorization.
- `/order`: Order processing and history.
- `/payment`: Payment integration logic.
- `/wallet`: User wallet and balance.
- `/transactions`: Transaction history.
- `/notification`: User notifications.
- `/platform`: Platform-level settings and info.

## 🚢 Deployment

The server is configured for deployment on [Vercel](https://vercel.com/) via `vercel.json` and the `api/` directory.

---

© 2026 Digitradia
