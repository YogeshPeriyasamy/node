const http=require("http");
function serverprovider(req,res)
{
    console.log(req);
}

const server=http.createServer(serverprovider)
server.listen(3000);