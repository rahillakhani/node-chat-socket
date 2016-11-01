
var express = require('express');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);

var port = 3000;

app.use('/views', express.static('views'));
app.get('/',function(req,res){
	// res.send('<h1>hello</h1>');
	res.sendFile(__dirname + '/views/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
  });
});


http.listen(port, function(){
	console.log("listening at port",port);
});