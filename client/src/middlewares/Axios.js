import axios from 'axios';

const api = axios.create({
    baseURL: 'https://chat-app-36uv.onrender.com',
    withCredentials: true,
});

export default api;
