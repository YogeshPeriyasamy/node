const express = require('express');
let fs = require("fs");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const session=require('express-session');
app.use(session({
    secret : "mysecret",
    resave : true,
    saveUninitialized : false
}))


const path=require('path')

//to provide css for the boooking page set the route
app.use(express.static(path.join(__dirname,'public')));

app.get('/admin', (req, res, next) => {
    res.send('<form action="/chat_page" method="POST"><input type="text" name="user" /><button>SUBMIT</button></form>');
});

app.get('/booking',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'htmlview','contact.html'))
})

app.post('/bookingconfirmed',(req,res,next)=>{
    res.send("appointment booked");
})
app.post('/chat_page', (req, res, next) => {
   
    if (req.body.user) {
        // Store the user name if it's provided
        
       req.session.user_name = req.body.user;
    }
    let globaluser_name=req.session.user_name || 'anonymous'
    let message = req.body.text || '';
    
    console.log(`User: ${globaluser_name}`);
    console.log(`Message: ${message}`);
    
    if (message) {
        // Write the message to the file if it's provided
        fs.appendFileSync("chattext.txt", `${globaluser_name}: ${message}\n`);
    }
     //to get the files from chattext.txt
     let chathistory="";
     try{
        chathistory=fs.readFileSync("chattext.txt","utf-8")
     }catch (err){
        console.log("cannot load the chats")
     }
    // Respond with the message form again
    res.send(`
        <p>Enter message:</p>
        <form action="/chat_page" method="POST"><input type="text" name="text" />
        <button>Send</button>
        </form>
        <h1> Chats :: </h1>
        <pre>${chathistory}</pre>
        `);
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");

});
