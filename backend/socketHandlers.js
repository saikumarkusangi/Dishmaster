import { Server } from 'socket.io';
import dishModel from './models/dish.js';

const socketHandler = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected');
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    // MongoDB change stream setup
    const dishChangeStream = dishModel.watch([], { fullDocument: 'updateLookup' });

    dishChangeStream.on('change', (change) => {
        const { operationType, fullDocument } = change;

        if (operationType === 'update' || operationType === 'replace') {
            io.emit('dishUpdated', fullDocument);
        }
    });

    console.log('Socket handler initialized');
};

export default socketHandler;
