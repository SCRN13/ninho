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
	socket.on('message', function(msg) {
		io.emit('some event', { for: 'everyone', msg: 'You sent: ' + msg });
		console.log('Message event: ', msg);
	});
});

http.listen( 4000, function() {
    console.log('listening...');
});