import express from 'express';
import User from '../models/User.js';
import { AuthenticationError, BadRequestError } from '../core/ApiError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { isLoggedIn } from '../middleware/auth.js';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// register
router.post('/register', async (req, res) => {
    const { username, password, email, role } = req.body;
    // if user with the username already exists
    const user = await User.findOne({ username });
    if (user) {
        throw new BadRequestError('User with this username is already registered');
    }

    // hash the plain password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create user in the database.
    await User.create({ username, password: hashedPassword, email, role });

    // send the success response.
    res.status(200).json({ message: 'User registered successfully' });
});

// login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        throw new AuthenticationError('username or password is incorrect');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new AuthenticationError('username or password is incorrect');
    }

    // sign a token with a secret
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: 60*60 });
    res.cookie('token', token);
    
    res.status(200).json({ token });
});

router.get('/profile', isLoggedIn, async(req, res) => {
    const { userId } = req;
    const user = await User.findById(userId);
    res.status(200).json(user);
})

export default router;