//hay disini untuk api menggunakan http
// var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
//express sebagai pengganti hpp untuk sebagai server

// http.createServer(function(req, res){
//     //req belum dipakai sehingga warna masih buram
//     res.writeHead(200,{'Content-Type':'Text/plain'});
//     res.end('Hello Anggit Server');
//     //untuk yang ditampikan kedalam server ketika di panggi;
// }).listen(3030);
app.get('/', function(req , res){
    res.send('hallo Anggit');
});
app.post('/', function(req, res){
    res.send('untunk post');
});
app.delete('/', function(req, res){
    res.send('untuk delete');
});
app.put('/', function(req, res){
    res.send('untuk put');
});
//kegunaan expres untuk mengetahui perinttah yang ingin dipakai
//ada get, post, put dan delet yang sering dipakai untuk crud
app.listen(port);
    //dan listen ini adalah port yang dituju ketika dipanggil sebagai api
console.log('listen on port :', port);

