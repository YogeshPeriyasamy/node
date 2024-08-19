const express = require ("express");
const router= express.Router();
router.use('/home', (req, res, next) => {
    console.log('hello node users');
    res.send('Welcome to the homepage!'); // Send a response to avoid hanging
  });
  
module.exports=router;