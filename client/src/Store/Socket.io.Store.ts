import { create } from "zustand";
import { io } from "socket.io-client";
import MessageStore from "./MessageStore";


type socket = {
    socket: any
    onlineUsers: string[] | string

}

const SocketStore = create<socket>((set, get: any) => ({
    socket: null,
    onlineUsers: [],
    setOnlineUsers: (onlineUsers: string) => {
        set({ onlineUsers: onlineUsers })
    },
    connectSocket: (userId: string) => {
        const newSocket = io('https://chat-app-62sm.onrender.com', {
            query: {
                userId,
            },
        });

        newSocket.on('connect', () => {
            console.log('Connected to server');
            set({ socket: newSocket });
        });

        newSocket.on('newMessage', (message) => {
            console.log('Message:', message);

            // Append the new message to the existing array
            MessageStore.getState().addMessage(message);
        });

        newSocket.on('connectedUser', (onlineUsers) => {
            get().setOnlineUsers(onlineUsers)
        });

        // Return a cleanup function to disconnect the socket
        return () => {
            newSocket.on('newMessage', (message) => {
                console.log('Message:', message);

                // Append the new message to the existing array
                MessageStore.getState().addMessage(message);
            });

            newSocket.disconnect();
            console.log('Disconnected from server');
            set({ socket: null, onlineUsers: [] }); // Reset the state
        };
    },
}));

export default SocketStore;
