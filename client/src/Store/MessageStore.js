import { create } from "zustand";
import api from "../middlewares/Axios";
import toast from "react-hot-toast";
import SocketStrore from "./Socket.io.Store";



const MessageStore = create((set, get) => ({

    messages: [],
    message: "",
    reciverId: null,
    reciverUserData: null,
    isFetchedMessage: false,
    onlineUsers: [],

    addMessage: (socketMessage) => {
        set((state) =>
            ({ messages: [...state.messages, socketMessage], })
        )
    }
    ,
    setMessage: (message) => set({ message: message }),
    setReciverId: (reciverId) => set({ reciverId: reciverId }),
    fetchMessages: async () => {
        if (!get().reciverId) return;
        set({ isFetchedMessage: false })
        try {
            set({ messages: [] })
            const res = await api.get(`/api/message/${get().reciverId}`)
            const data = await res.data

            if (data) {
                set({ messages: data })
            }

        } catch (error) {
            if (error.response) {
                toast(error.response.data.error, { icon: '🤷‍♂️', });
            }
        }

    },
    sendMessage: async (messageData) => {
        set({ message: '' })
        if (!get().reciverId) return;
        try {
            const res = await api.post(`/api/message/${get().reciverId}`, {
                message: messageData
            })
            const data = await res.data
            const { socket } = SocketStrore.getState()

            if (socket) {
                socket.emit('sendMessage', { reciverId: get().reciverId, message: data })
            } else {
                console.log('socket not found');
            }

            if (data) {
                set({ messages: [...get().messages, data] })
            }

        } catch (error) {
            console.log(error)
        }
    },
    getReciverUserData: async () => {
        if (!get().reciverId) return;
        try {
            const res = await api.get(`/api/message/recicerdata/${get().reciverId}`)
            const data = await res.data
            if (data) {
                set({ reciverUserData: data })
            }

        } catch (error) {
            console.log(error)
        }

    }

}));

export default MessageStore