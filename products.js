const express = require('express');
const router = express.Router();

// Simple in-memory store for products
let products = [
  { id: 1, name: 'Phone', price: 699 },
  { id: 2, name: 'Laptop', price: 1299 }
];

// GET /products - return all products as JSON
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products - add a new product from JSON request body
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Product name and price are required.' });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
