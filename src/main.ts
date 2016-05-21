/// <reference path="../typings/tsd.d.ts"/>
let socketIO = require('socket.io');
let koa = require('koa');
let cors = require('koa-cors');

let sio = socketIO();
// sio.serveClient(true); // the server will serve the client js file
// sio.attach(httpServer);

// listen for a connection
sio.on('connection', function(socket) {
	console.log('User ' + socket.id + ' connected');
	socket.emit('message', 'Hello from the client');
});


// app.use(function* () {
	// this.body = 'Hello World';
// });
let app = koa();
app.use(cors());
sio.attach(app);


app.listen(3000);

console.log('Hello world');