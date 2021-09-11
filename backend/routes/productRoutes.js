import express from "express";

import {
  getProducts,
  getProductById,
} from "../controllers/productControllers.js";

const router = express.Router();

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 */
router.route("/").get(getProducts);

/**
 * @desc    Fetch single products
 * @route   GET /api/products/:id
 * @access  Public
 */
router.route("/:id").get(getProductById);

export default router;
