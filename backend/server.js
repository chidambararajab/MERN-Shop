import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

// To get every environment variable to this folder.
dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow)
);
