const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//route to the admin block
const adminrouter_path=require('./routes/admin');
app.use('/admin',adminrouter_path);

const main_path=require('./routes/homepage');
app.use('/shop',main_path);
// Root route
app.use((req,res,next)=>{
  res.status(404).send('<h1>page not found</h1>')
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
