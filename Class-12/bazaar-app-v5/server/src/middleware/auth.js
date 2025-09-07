import jwt from 'jsonwebtoken';

const JWT_SECRET = "Weneedabettersecret";

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