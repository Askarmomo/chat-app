import axios from 'axios';

const api = axios.create({
    baseURL: 'https://chat-app-server-sl60.onrender.com',
    withCredentials: true,
});

export default api;
