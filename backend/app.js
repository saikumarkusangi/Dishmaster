import express from 'express';
import cors from 'cors';
import dbConnection from './config/db.js';
import dishRoutes from './routes/dish.js';
import http from 'http';
import {Server} from 'socket.io';
import socketHandler from './socketHandlers.js';

const app = express();
const PORT = process.env.PORT;
const server = http.createServer(app);
dbConnection();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json())

app.use('/api', dishRoutes);


const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});


socketHandler(io)

server.listen(PORT, () => {
    console.log(`server is started on port : ${PORT}`);
});



export default app;