// app.js
const express = require('express');
const path = require('path');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the product routes
app.use('/products', productRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
