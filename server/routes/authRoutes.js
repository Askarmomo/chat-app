import express from "express"
import authenticate from "../middleware/authenticate.js";
import { getAllUsers, getUserProfile, login, logout, singup } from "../controllers/authController.js";
const authRoute = express.Router();



authRoute.post('/singup', singup);

authRoute.post('/login', login);

authRoute.get('/userprofile', authenticate, getUserProfile);

authRoute.get('/alluser', authenticate, getAllUsers)

authRoute.post('/logout', authenticate, logout)

export default authRoute
