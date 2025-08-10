# Backend Authentication API

A robust Node.js/Express.js backend application with MongoDB integration, featuring complete user authentication with JWT tokens, password hashing, and comprehensive security features.

## 🚀 Features

- **User Authentication**: Complete signup and login system
- **JWT Tokens**: Secure token-based authentication
- **Password Security**: Bcrypt password hashing with salt rounds
- **Input Validation**: Comprehensive request validation using express-validator
- **Rate Limiting**: Protection against brute force attacks
- **Security Headers**: Helmet.js for security headers
- **CORS Support**: Configurable cross-origin resource sharing
- **Error Handling**: Centralized error handling with detailed responses
- **MongoDB Integration**: Mongoose ODM with schema validation
- **Environment Configuration**: Flexible environment-based configuration

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js          # MongoDB connection
│   │   └── environment.js       # Environment configuration
│   ├── controllers/
│   │   ├── authController.js    # Authentication handlers
│   │   └── index.js
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication middleware
│   │   ├── errorHandler.js      # Global error handling
│   │   └── rateLimiter.js       # Rate limiting configuration
│   ├── models/
│   │   ├── User.js              # User schema and model
│   │   └── index.js
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   └── index.js             # Main router
│   ├── services/
│   │   ├── authService.js       # Authentication business logic
│   │   └── index.js
│   ├── utils/
│   │   └── responseFormatter.js # Response formatting utilities
│   ├── validators/
│   │   ├── authValidators.js    # Input validation schemas
│   │   └── index.js
│   ├── app.js                   # Express app configuration
│   └── server.js                # Server entry point
├── tests/                       # Test files (structure ready)
├── uploads/                     # File uploads directory
├── logs/                        # Application logs
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore file
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone and Install

```bash
# Navigate to your project directory
cd backend

# Install dependencies
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory and configure the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/backend_auth_db
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_2024
JWT_EXPIRES_IN=7d

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Security
BCRYPT_SALT_ROUNDS=12
```

### 3. Database Setup

Make sure MongoDB is running:

```bash
# For local MongoDB
mongod

# Or start MongoDB service (Linux/macOS)
sudo systemctl start mongod  # Linux
brew services start mongodb-community  # macOS
```

### 4. Start the Application

```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000` (or your configured PORT).

## 📚 API Endpoints

### Authentication Endpoints

| Method | Endpoint                    | Description         | Auth Required |
| ------ | --------------------------- | ------------------- | ------------- |
| POST   | `/api/auth/signup`          | Register new user   | ❌            |
| POST   | `/api/auth/login`           | User login          | ❌            |
| GET    | `/api/auth/profile`         | Get user profile    | ✅            |
| PUT    | `/api/auth/profile`         | Update user profile | ✅            |
| POST   | `/api/auth/change-password` | Change password     | ✅            |
| POST   | `/api/auth/deactivate`      | Deactivate account  | ✅            |
| GET    | `/api/auth/verify-token`    | Verify JWT token    | ✅            |
| POST   | `/api/auth/logout`          | User logout         | ✅            |

### Utility Endpoints

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| GET    | `/`           | Root endpoint |
| GET    | `/api/health` | Health check  |

## 🔐 Authentication

### Signup Request

```json
POST /api/auth/signup
Content-Type: application/json

{
  "fname": "John",
  "lname": "Doe",
  "email": "john.doe@example.com",
  "password": "SecurePass123",
  "confirmPassword": "SecurePass123"
}
```

### Login Request

```json
POST /api/auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "SecurePass123"
}
```

### Authentication Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "user_id",
      "fname": "John",
      "lname": "Doe",
      "email": "john.doe@example.com",
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenExpiry": "7d"
  }
}
```

### Using the JWT Token

Include the token in the Authorization header for protected routes:

```
Authorization: Bearer <your_jwt_token>
```

## 🔒 Security Features

- **Password Hashing**: Bcrypt with configurable salt rounds
- **JWT Tokens**: Secure, stateless authentication
- **Rate Limiting**: Protects against brute force attacks
- **Input Validation**: Comprehensive request validation
- **Security Headers**: Helmet.js for security headers
- **CORS Protection**: Configurable origin whitelist
- **Error Handling**: Sanitized error responses

## 🧪 Testing

The project structure includes test directories. You can add your tests in:

- `tests/unit/` - Unit tests
- `tests/integration/` - Integration tests

## 📝 User Model

The User model includes the following fields:

- `fname` (String, required): First name
- `lname` (String, required): Last name
- `email` (String, required, unique): Email address
- `password` (String, required): Hashed password
- `isActive` (Boolean): Account status
- `lastLogin` (Date): Last login timestamp
- `createdAt` (Date): Account creation timestamp
- `updatedAt` (Date): Last update timestamp

## 🔧 Configuration

### Environment Variables

| Variable                  | Description               | Default               |
| ------------------------- | ------------------------- | --------------------- |
| `PORT`                    | Server port               | 5000                  |
| `NODE_ENV`                | Environment mode          | development           |
| `MONGODB_URI`             | MongoDB connection string | Required              |
| `JWT_SECRET`              | JWT signing secret        | Required              |
| `JWT_EXPIRES_IN`          | Token expiration time     | 7d                    |
| `ALLOWED_ORIGINS`         | CORS allowed origins      | http://localhost:3000 |
| `RATE_LIMIT_WINDOW_MS`    | Rate limit window         | 900000 (15 min)       |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window   | 100                   |
| `BCRYPT_SALT_ROUNDS`      | Bcrypt salt rounds        | 12                    |

## 🚀 Production Deployment

1. Set `NODE_ENV=production`
2. Use a strong, unique `JWT_SECRET`
3. Configure MongoDB Atlas or production database
4. Set appropriate `ALLOWED_ORIGINS`
5. Consider using a process manager like PM2
6. Set up logging and monitoring
7. Use HTTPS in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

**Note**: Make sure to change the `JWT_SECRET` and other sensitive configurations before deploying to production!
