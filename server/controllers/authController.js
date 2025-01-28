import { generateToken } from "../genarateToken.js";
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";

export const singup = async (req, res) => {

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Enter username and password' })
        }
        if (username.trim() && username.length < 3) {
            return res.status(400).json({ error: "Uername must have 3 latter" })
        }
        if (password.trim() && password.length < 6) {
            return res.status(400).json({ error: "Password must have 6 latter" })
        }

        const exitingUser = await User.findOne({ username: username })

        if (!exitingUser) {

            const user = new User({ username, password, profilePic: 'https://www.webiconio.com/_upload/255/image_255.svg' });
            await user.save();
            generateToken(res, user._id);
            res.status(200).json(user);

        } else {
            res.status(400).json({ error: "user already exsist" })
        }
    } catch (error) {
        console.log('Error in singup', error.message);
        res.status(500).json({ message: "Internal server error" })

    }

}

export const login = async (req, res) => {

    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Enter username and password' })
        }

        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        generateToken(res, user._id);

        res.status(200).json(user);
    } catch (error) {

        console.log('Error in login', error.message);
        res.status(500).json({ message: "Internal server error" })

    }

}

export const getUserProfile = async (req, res) => {

    try {

        const id = req.user.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);

    } catch (error) {
        console.log('Error in userprofile', error.message);
        res.status(500).json({ message: "Internal server error" })

    }

}

export const getAllUsers = async (req, res) => {

    try {

        const users = await User.find().select('-password');

        const filteredUser = users.filter(user => user._id.toString() !== req.user.id);
        res.status(200).json(filteredUser);

    } catch (error) {
        console.log('Error in alluser', error.message);
        res.status(500).json({ message: "Internal server error" })

    }

}