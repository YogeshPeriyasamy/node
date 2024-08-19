const express = require("express");
const routered = express.Router();

// Display the form at /add-product
routered.get('/add-product', (req, res, next) => {
  res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/> <button>submit</button></form>');
  
});

// Handle form submission
routered.post('/product', (req, res, next) => { // Changed POST to post
  console.log(`Parsed body:`, req.body); // Corrected logging
  res.redirect('/shop/home'); // Redirect to root after processing
});

module.exports = routered
