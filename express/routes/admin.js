const express = require("express");
const routered = express.Router();

//creating a controller 
const productcontroller=require('../controller/product')

// Display the form at /add-product
routered.get('/add-product',productcontroller.getcontroller);

// Handle form submission
routered.post('/product', (req, res, next) => { // Changed POST to post
  console.log(`Parsed body:`, req.body); // Corrected logging
  res.redirect('/shop/home'); // Redirect to root after processing
});

module.exports = routered
