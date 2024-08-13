const ahttp=require("http");
function serverprovider(req,res)
{
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>node server</title></head>');
    res.write('<body><h1>Node server has been created</h1></body>')
    res.write('</html>')
    res.end()
}

const server=ahttp.createServer(serverprovider)
server.listen(3000);