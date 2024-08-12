const http=require("http");
function serverprovider(req,res)
{
    console.log("Yogesh");
}

const server=http.createServer(serverprovider)
server.listen(4000);