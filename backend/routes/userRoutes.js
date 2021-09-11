import express from "express";

import { authUser } from "../controllers/userControllers.js";

const router = express.Router();

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 */
router.post("/login", authUser);

export default router;
