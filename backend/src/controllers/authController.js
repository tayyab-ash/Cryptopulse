const { AuthService } = require("../services");

class AuthController {
  // POST /api/auth/signup
  static async signup(req, res, next) {
    try {
      const { fname, lname, email, password } = req.body;

      const result = await AuthService.registerUser({
        fname,
        lname,
        email,
        password,
      });

      res.status(201).json(result);
    } catch (error) {
      if (error.message === "User with this email already exists") {
        return res.status(409).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === "ValidationError") {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: Object.values(error.errors).map((err) => ({
            field: err.path,
            message: err.message,
          })),
        });
      }

      next(error);
    }
  }

  // POST /api/auth/login
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const result = await AuthService.loginUser(email, password);

      res.status(200).json(result);
    } catch (error) {
      if (
        error.message === "Invalid email or password" ||
        error.message === "Account is deactivated. Please contact support."
      ) {
        return res.status(401).json({
          success: false,
          message: error.message,
        });
      }

      next(error);
    }
  }

  // GET /api/auth/profile
  static async getProfile(req, res, next) {
    try {
      const userId = req.user._id;

      const result = await AuthService.getUserProfile(userId);

      res.status(200).json(result);
    } catch (error) {
      if (
        error.message === "User not found" ||
        error.message === "Account is deactivated"
      ) {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      next(error);
    }
  }

  // PUT /api/auth/profile
  static async updateProfile(req, res, next) {
    try {
      const userId = req.user._id;
      const updateData = req.body;
      const result = await AuthService.updateUserProfile(userId, updateData);
      res.status(200).json(result);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }
      if (error.message === "No valid updates provided") {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      next(error);
    }
  }

  // POST /api/auth/change-password
  static async changePassword(req, res, next) {
    try {
      const userId = req.user._id;
      const { currentPassword, newPassword } = req.body;

      const result = await AuthService.changePassword(
        userId,
        currentPassword,
        newPassword
      );
      res.status(200).json(result);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }
      if (error.message === "Current password is incorrect") {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      next(error);
    }
  }

  // POST /api/auth/deactivate
  static async deactivateAccount(req, res, next) {
    try {
      const userId = req.user._id;
      const result = await AuthService.deactivateAccount(userId);
      res.status(200).json(result);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }
      next(error);
    }
  }

  // GET /api/auth/verify-token
  static async verifyToken(req, res) {
    res.status(200).json({
      success: true,
      message: "Token is valid",
      data: {
        user: req.user,
      },
    });
  }

  // POST /api/auth/logout
  static async logout(req, res) {
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  }
}

module.exports = AuthController;
