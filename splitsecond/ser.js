const http=require('http');
const route=require('./route')
http.createServer(route.handler).listen(3000)