const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// Display the form at /add-product
app.get('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"/> <button>submit</button></form>');
});

// Handle form submission
app.POST('/product', (req, res, next) => {
  console.log(`Parsed body:`, req.body); // Corrected logging
  res.redirect('/'); // Redirect to root after processing
});

// Root route
app.use('/', (req, res, next) => {
  console.log('hello node users');
  res.send('Welcome to the homepage!'); // Send a response to avoid hanging
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
