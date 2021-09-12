import express from "express";

import {
  registerNewUser,
  authUser,
  getUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authUserMiddleware.js";

const router = express.Router();

/**
 * @desc    Register new user
 * @route   POST /api/users
 * @access  Public
 */
router.route("/").post(registerNewUser);

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 */
router.post("/login", authUser);

/**
 * @desc    User profile details
 * @route   GET /api/users/profile
 * @access  Private
 */
router.route("/profile").get(protect, getUserProfile);

export default router;
