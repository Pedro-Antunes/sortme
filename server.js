var express = require('express');
var app = express();
var server = require('http').Server(app);

var port = process.env.PORT || 3000;
app.use(express.static('html'));

app.get('/', function(req, res){
    res.sendFile('html/begin.html',{root: __dirname})
});

server.listen(port, '0.0.0.0',function(){
    //console.log('OLAAAAA, ESTOU A FUNCIONAR POR AGORA');
});