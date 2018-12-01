var express = require('express');
var app = express();
var https = require('https');
var http = require('http');
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/polls/index.html');
});

app.listen(process.env.PORT || 3000);
