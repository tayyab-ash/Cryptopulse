const express = require("express");
const { AuthController } = require("../controllers");
const { authenticateToken } = require("../middleware/auth");
const { authLimiter } = require("../middleware/rateLimiter");
const {
  validateSignup,
  validateLogin,
  validatePasswordChange,
  handleValidationErrors,
} = require("../validators");

const router = express.Router();

router.post(
  "/signup",
  authLimiter,
  validateSignup,
  handleValidationErrors,
  AuthController.signup
);

router.post(
  "/login",
  authLimiter,
  validateLogin,
  handleValidationErrors,
  AuthController.login
);

// protected routes (authentication required)
router.get("/profile", authenticateToken, AuthController.getProfile);

router.put(
  "/profile",
  authenticateToken,
  [
    require("express-validator")
      .body("fname")
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("First name must be between 2 and 50 characters")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("First name can only contain letters and spaces"),

    require("express-validator")
      .body("lname")
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("Last name must be between 2 and 50 characters")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Last name can only contain letters and spaces"),
  ],
  handleValidationErrors,
  AuthController.updateProfile
);

router.post(
  "/change-password",
  authenticateToken,
  authLimiter,
  validatePasswordChange,
  handleValidationErrors,
  AuthController.changePassword
);
router.post("/deactivate", authenticateToken, AuthController.deactivateAccount);
router.get("/verify-token", authenticateToken, AuthController.verifyToken);
router.post("/logout", authenticateToken, AuthController.logout);

module.exports = router;
