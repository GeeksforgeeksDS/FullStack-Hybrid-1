import jwt from 'jsonwebtoken';
import { AuthenticationError } from '../core/ApiError.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const isLoggedIn = (req, res, next) => {
    const token = req.headers?.authorization.replace("Bearer ", "");
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.userId = payload.userId;
        return next();
    }
    catch (err) {
        return next(err); //u are forwarding the error to global exception handler
    }
}

export const hasRoleAdmin = (req, res, next) => {
    const token = req.headers?.authorization.replace("Bearer ", "");
    try {
        const {userId, role} = jwt.verify(token, JWT_SECRET);
        req.userId = userId;

        if (role !== 'Admin') {
            throw new AuthenticationError('You dont have persmission to this route');
        }
        return next();
    }
    catch (err) {
        return next(err); //u are forwarding the error to global exception handler
    }
}