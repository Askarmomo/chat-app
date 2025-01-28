import mongoose from "mongoose";

const schema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "sender id is must include"]
    },
    reciverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "reciver id is must include"]
    },
    message: {
        type: String,
        required: true,
    }

}, { timestamps: true })

const Message = mongoose.model('Message', schema)

export default Message;