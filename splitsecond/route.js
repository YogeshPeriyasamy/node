const fs=require('fs')
let last_message="";
const routehandler=(req,res)=>{
const url=req.url;
const method=req.method;
if(url=='/'&& method=='GET')
{
    //to say the res will e text or html
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Home page</title></head>');
    res.write('<body>')
    res.write('<form action="/message" method="POST"><input type="text" name="node message" /> <button type="submit">Send</button>')
    if(last_message)
    {
        res.write(`<p>${last_message}</p>`)
    }
    res.write('</body>')
    res.write('</html>')
    return res.end()
}
else if(url=="/message" && method=="POST")
{
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
    })
    req.on('end',()=>{
        let parsedchunk=Buffer.concat(body).toString();
        last_message=parsedchunk.split('=')[1];
        fs.writeFileSync("route.text",last_message);
        
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    })   
}
// to handle the error when the '/' or '/message' action is not performed
else{
    res.write('<html>')
    res.write('<head><title>throw error</title></head>');
    res.write('<body><h1>Type error hapened</h1></body>')
    res.write('</html>')
}
}
//module.exports=routehandler;
//modeule.exports.handler=routehandler;
module.exports={
    handler:routehandler
}