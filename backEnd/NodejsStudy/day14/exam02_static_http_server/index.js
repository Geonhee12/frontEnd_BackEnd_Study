import http from 'http'
import nodestatic from 'node-static'


const port = 8080;
const fileServer = new (nodestatic.Server)('./www');

http.createServer((req, res)=>{
    console.log(req.url);
    fileServer.serve(req, res);

}).listen(port)

console.log(`listen ${port}`);