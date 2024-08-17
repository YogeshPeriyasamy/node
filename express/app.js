
const express=require ('express');
const app=express();
app.use((req,res,next)=>{

    console.log(`Request received: ${req.method} ${req.url}`);
  
    if (req.path === '/favicon.ico') {
      console.log('Favicon request ignored');
      return res.status(204).end(); // Ignore favicon requests
    }
  
    console.log('app runs1');
    res.send("hi world");
})
app.listen(3000)