const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server /* , {
    cors: {
        origin: '*',
    },
} */);
const cors = require('cors');

const PORT = process.env.PORT || 25565;

app.use(cors());

app.all('/', (req, res) => {
    res.status(405).send('Method not allowed');
});

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('send new message', (message) => {
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
