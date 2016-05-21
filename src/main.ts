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
});

io.on('message', function(socket) {
	console.log('Message event');
});

http.listen( 4000, function() {
    console.log('listening...');
});