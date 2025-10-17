const express = require('express');
const cors = require('cors');
const http = require('http');
const os = require('os');
const productsRoutes = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware to handle CORS and parse JSON bodies
app.use(cors());
app.use(express.json());

// Use http module to create server and log every incoming request's method and url
const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method} | Request URL: ${req.url}`);
  app(req, res);
});

// Route to handle product related requests
app.use('/products', productsRoutes);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Print system information using os module
  console.log('System Information:');
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU cores: ${os.cpus().length}`);
});
