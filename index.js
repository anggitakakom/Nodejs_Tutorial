//hay disini untuk api menggunakan http
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'Text/plain'});
    res.end('Hello Anggit Server');
    //untuk yang ditampikan kedalam server ketika di panggi;
}).listen(3030);
    //dan listen ini adalah port yang dituju ketika dipanggil sebagai api
console.log('listen on port : 3030');
