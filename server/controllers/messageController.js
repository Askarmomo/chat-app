import Conversation from "../models/conversationSechema.js";
import Message from "../models/messageSchema.js";
import User from "../models/userSchema.js";
import { findSocketIdByUserId, io } from "../socket.io.js";


export const sendMessage = async (req, res) => {
    const { id: reciverId } = req.params;
    const senderId = req.user.id;

    const { message } = req.body;
    try {

        if (!message) {
            return res.status(400).json({ error: 'Enter message' })
        }
        if (!reciverId && !senderId) {
            return res.status(400).json({ error: 'a message have to senderId reciverId' })
        }

        let conversation = await Conversation.findOne({ participants: { $all: [senderId, reciverId] } });

        if (!conversation) {
            conversation = await Conversation.create({ participants: [senderId, reciverId] });
        }

        const newMessage = await Message.create({
            senderId: senderId,
            reciverId: reciverId,
            message: message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        await conversation.save();

        res.status(200).json(newMessage);

    } catch (error) {
        console.log('Error in sending message', error.message);
        res.status(500).json({ message: "Internal server error" })
    }

}

export const getAllMessages = async (req, res) => {

    try {

        const { id: reciverId } = req.params;
        const senderId = req.user.id;

        const conversation = await Conversation.findOne({ participants: { $all: [senderId, reciverId] } }).populate('messages');

        if (!conversation) {
            return res.status(400).json({ error: 'No conversation found' })
        }

        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log('Error in getting all messages', error.message);
        res.status(500).json({ message: "Internal server error" })

    }

}

export const getReciverData = async (req, res) => {

    try {

        const { id: reciverId } = req.params;

        if (!reciverId) {
            return res.status(400).json({ error: 'Enter reciverId' })
        }

        const reciverUserData = await User.findById(reciverId);

        res.status(200).json(reciverUserData);

    } catch (error) {
        console.log('Error in getting reciverData', error.message);
        res.status(500).json({ message: "Internal server error" })
    }

}