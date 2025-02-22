import { create } from "zustand";
import api from "../middlewares/Axios";
import toast from "react-hot-toast";
import SocketStrore from "./Socket.io.Store";




type Message = {
    _id: string
    senderId: string
    reciverId: string
    message: string
    createdAt: string
    updatedAt: string

}

type User = {
    _id: string,
    username: string,
    profilePic: string,
}

type store = {
    messages: Message[];
    message: string;
    reciverId: string | null;
    reciverUserData: User | null;
    isFetchedMessage: boolean;
    onlineUsers: string[] ;
    addMessage: (socketMessage: Message) => void;
    setMessage: (message: string) => void;
    setReciverId: (reciverid: string) => void;
    fetchMessages: () => Promise<void>;
    sendMessage: (messageData: string) => Promise<void>;
    getReciverUserData: () => Promise<void>;

}


const MessageStore = create<store>((set, get) => ({

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
    setMessage: (message) => set({ message }),
    setReciverId: (reciverId) => set({ reciverId }),

    fetchMessages: async () => {
        if (!get().reciverId) return;
        set({ isFetchedMessage: false })
        try {
            set({ messages: [] })
            const res = await api.get(`/api/message/${get().reciverId}`)
            const data = res.data

            if (data) {
                set({ messages: data })
            }

        } catch (error: any) {
            if (error?.response) {
                toast(error.response.data.error, { icon: '🤷‍♂️', });
            } else {
                console.error("Unknown error:", error);
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
            const data = res.data
            const { socket }: any = SocketStrore.getState()

            if (socket) {
                socket.emit('sendMessage', { reciverId: get().reciverId, message: data })
            } else {
                console.log('socket not found');
            }

            if (data) {
                set((state) => ({ messages: [...state.messages, data] }));
            }

        } catch (error: any) {
            console.log(error)
        }
    },
    getReciverUserData: async () => {
        if (!get().reciverId) return;
        try {
            const res = await api.get(`/api/message/recicerdata/${get().reciverId}`)
            const data = res.data
            if (data) {
                set({ reciverUserData: data })
            }

        } catch (error: any) {
            console.log(error)
        }

    }

}));

export default MessageStore