const ahttp=require("http");
function serverprovider(req,res)
{
    //console.log(req);
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>node server</title></head>');
    res.write('<body>');
    if(req.url=='/home'){
        res.write('<h1> Welcome home</h1>')
    }
    else if(req.url=='/about'){
        res.write('<h1> Welcome to About Us page</h1>')
    }
    else{
        res.write('<h1>  Welcome to my Node Js project</h1>')
    }
    res.write('</body>');
    res.write('</html>')
    res.end()
}

const server=ahttp.createServer(serverprovider)
server.listen(3000);