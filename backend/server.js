import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

// To get every environment variable to this folder.
// Another Line of code.
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
