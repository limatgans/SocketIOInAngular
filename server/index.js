const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const cors = require('cors');
const monk = require('monk');
const db = monk('mongodb://localhost:27017/testPushNotification');

server.listen(port, () => {
    console.log('Server listening at port', port);
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Routes

const getNotifications = require('./routes/getNotifications')({db, express});
const postNotifications = require('./routes/postNotifications')({db, express});

app.use("/getNotifications", getNotifications);
app.use("/postNotifications", postNotifications);