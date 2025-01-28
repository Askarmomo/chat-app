import express from 'express';
import authenticate from '../middleware/authenticate.js';
import { getAllMessages, getReciverData, sendMessage } from '../controllers/messageController.js';

const messageRoute = express.Router();

messageRoute.post('/:id', authenticate, sendMessage);

messageRoute.get('/:id', authenticate, getAllMessages)

messageRoute.get('/recicerdata/:id', authenticate, getReciverData)

export default messageRoute;
