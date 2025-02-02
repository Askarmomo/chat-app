
import express from 'express';
import http from "http"
import { Server } from "socket.io"


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://chat-app-client-iota.vercel.app",
<<<<<<< HEAD
        methods: ["GET", "POST"],
        credentials: true
=======
        methods: ["GET", "POST"]
>>>>>>> 682f9dc9a9555d2bdf07371e89058e4db8a3c7a8
    }
});

const socketUsers = new Map()
console.log(Array.from(socketUsers.keys()));

export const findSocketIdByUserId = (reciverId) => {
    return socketUsers.get(reciverId)
}

io.on('connection', (socket) => {
    console.log(`a user user conected on id ${socket.id}`);

    const { userId } = socket.handshake.query
    if (userId) {
        socketUsers.set(userId, socket.id)
    }


    io.emit('connectedUser', Array.from(socketUsers.keys()))

    socket.on('sendMessage', ({ reciverId, message }) => {

        const reciverSocketId = socketUsers.get(reciverId)
        if (reciverSocketId) {
            io.to(reciverSocketId).emit('newMessage', message)
        }

    })

    socket.on('disconnect', () => {
        if (userId) {
            console.log('user disConnect');
            socketUsers.delete(userId)
            io.emit('connectedUser', Array.from(socketUsers.keys()))
        }
    })


})

export { io, app, server }
