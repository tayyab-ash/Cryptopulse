const jwt = require("jsonwebtoken");
const { User } = require("../models");
const config = require("../config/environment");

class AuthService {
  // Generate JWT token
  static generateToken(userId) {
    return jwt.sign({ userId }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn,
    });
  }

  // Verify JWT token
  static verifyToken(token) {
    return jwt.verify(token, config.jwtSecret);
  }

  static async registerUser(userData) {
    try {
      const { fname, lname, email, password } = userData;
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        throw new Error("User with this email already exists");
      }
      const user = new User({
        fname,
        lname,
        email,
        password,
      });
      await user.save();
      const token = this.generateToken(user._id);
      await user.updateLastLogin();
      const userResponse = user.toJSON();
      return {
        success: true,
        message: "User registered successfully",
        data: {
          user: userResponse,
          token,
          tokenExpiry: config.jwtExpiresIn,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(email, password) {
    try {
      const user = await User.findByEmail(email).select("+password");
      if (!user) {
        throw new Error("Invalid email or password");
      }
      if (!user.isActive) {
        throw new Error("Account is deactivated. Please contact support.");
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error("Invalid email or password");
      }
      const token = this.generateToken(user._id);
      await user.updateLastLogin();
      const userResponse = user.toJSON();
      return {
        success: true,
        message: "Login successful",
        data: {
          user: userResponse,
          token,
          tokenExpiry: config.jwtExpiresIn,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  static async getUserProfile(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      if (!user.isActive) {
        throw new Error("Account is deactivated");
      }
      return {
        success: true,
        message: "Profile retrieved successfully",
        data: {
          user: user.toJSON(),
        },
      };
    } catch (error) {
      throw error;
    }
  }

  static async updateUserProfile(userId, updateData) {
    try {
      const allowedUpdates = ["fname", "lname"];
      const updates = {};
      Object.keys(updateData).forEach((key) => {
        if (allowedUpdates.includes(key)) {
          updates[key] = updateData[key];
        }
      });
      if (Object.keys(updates).length === 0) {
        throw new Error("No valid updates provided");
      }
      const user = await User.findByIdAndUpdate(
        userId,
        { ...updates, updatedAt: new Date() },
        { new: true, runValidators: true }
      );
      if (!user) {
        throw new Error("User not found");
      }
      return {
        success: true,
        message: "Profile updated successfully",
        data: {
          user: user.toJSON(),
        },
      };
    } catch (error) {
      throw error;
    }
  }

  static async changePassword(userId, currentPassword, newPassword) {
    try {
      const user = await User.findById(userId).select("+password");
      if (!user) {
        throw new Error("User not found");
      }
      const isCurrentPasswordValid =
        await user.comparePassword(currentPassword);
      if (!isCurrentPasswordValid) {
        throw new Error("Current password is incorrect");
      }
      user.password = newPassword;
      await user.save();

      return {
        success: true,
        message: "Password changed successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  static async deactivateAccount(userId) {
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { isActive: false, updatedAt: new Date() },
        { new: true }
      );
      if (!user) {
        throw new Error("User not found");
      }
      return {
        success: true,
        message: "Account deactivated successfully",
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
