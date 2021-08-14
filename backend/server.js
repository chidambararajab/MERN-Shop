import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// To get every environment variable to this folder.
dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", productRoutes);

// Wrong url or not found.
app.use(notFound);

// custom error handler, sometimes 200 status generate even with error so handle that and annded stack trace only for development purpose.
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow)
);
