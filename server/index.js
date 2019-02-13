const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(port, () => {
    console.log('Server listening at port', port);
});

io.on('connection', (socket) => {
    // when the client emits 'new message', this listens and executes
    socket.on('new message', ({message, title}) => {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
            message: message,
            title: title
        });
    });
});