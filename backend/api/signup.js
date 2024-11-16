// backend/api/signup.js
import express from 'express';
import User from '../models/User.js'; 
import bcrypt from 'bcrypt';

const signup = express.Router();

signup.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'This email is already registered. Please try another one.' });
        }

      const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

export default signup;
