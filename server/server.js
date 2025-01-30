
import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/authRoutes.js";
import connectDB from "../server/db.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoutes.js";
import { app, server } from "./socket.io.js";

dotenv.config()

app.use(express.json())
app.use(cors({
    origin: "https://chat-app-tawny-chi.vercel.app",
    credentials: true
}))
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/message', messageRoute)


server.listen(3000, () => {
    console.log('Server running on port 3000')
    connectDB()

});
