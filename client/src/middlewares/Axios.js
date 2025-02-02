import axios from 'axios';

const api = axios.create({
    baseURL: 'https://chat-app-62sm.onrender.com',
    withCredentials: true,
});

export default api;
