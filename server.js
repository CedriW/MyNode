const http = require('http');
const fs = require('fs');
var cors = require('cors');
var express = require('express');
var app = express();
//app.use(cors());


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})


app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})


app.get('/p2.html', function (req, res) {
    res.sendFile(__dirname + '/p2.html');
})


app.get('/p3.html', function (req, res) {
    res.sendFile(__dirname + '/p3.html');
})


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });
