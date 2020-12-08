import { Socket } from 'socket.io';
import { MessageType } from './types';

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

const PORT = process.env.PORT || 25565;

app.use(cors());

io.on('connection', (socket: Socket) => {
    console.log('user connected');

    socket.on('login', user => {
        console.log(user);
    });

    socket.on('send new message', (message: MessageType) => {
        console.log(message);
        io.emit('new message', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
