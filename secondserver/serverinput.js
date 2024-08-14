const http=require('http');
const fs=require('fs');
let lastmessage="";
//server2 to perform functions when browser calls it
const server2=http.createServer((req,res)=>{
if(req.url==='/')
{
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>node server2</title></head>');
    res.write('<body>') 
    res.write(`<p>${lastmessage}</p>`)
    res.write('<form action="/message" method="POST"><input type="text" name="hi node users"/><button type="submit">Send</button></form>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
}
else if(req.url==='/message' && req.method=="POST")
{
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk)
    })
    req.on('end',()=>{
        const parseddata=Buffer.concat(body).toString();
        //message that has to be sent and received
        const message=parseddata.split('=');
        fs.writeFileSync("serverinput.txt",message[1]);
    
   lastmessage=message[1];
    res.statusCode=302;
    res.setHeader("Location",'/')
    return res.end() 
    })
   
}else{
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>node server2 resent</title></head>');
    res.write('<body> <h1>node server from the send function</h1></body>')
    res.write('</html>')
     res.end();
}
})
server2.listen(3000);