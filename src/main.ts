/// <reference path="../typings/tsd.d.ts"/>
let app  = require('express')();
let http = require('http').Server( app );
let io   = require('socket.io')(http);

app.get( '/', function( req, res ) {
    res.send('HELLO!');
});

io.on('connection', function(socket) {
    console.log('connection');
    io.emit('message', { msg: 'Hello new user' });
	socket.on('message', function(data) {
		io.emit('message', { for: 'everyone', msg: 'You sent: ' + data.msg });
		console.log('Message event: ', data.msg);
	});
});

http.listen( 4000, function() {
    console.log('listening...');
});