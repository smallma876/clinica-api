import { NextFunction, Request, Response } from 'express';
import { verifyJWTToken } from '../utils/authUtils';
import { JwtPayload } from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.Authorization;
    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided' });
        return;
    }

    try {
        const [, token1] = token.split(' ');
        const { user } = verifyJWTToken(token1) as JwtPayload;
        req['user'] = user;
        next();
    } catch {
        res.status(400).json({ message: 'Invalid token.' });
    }
};
