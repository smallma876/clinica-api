import Jwt from 'jsonwebtoken';
import { User } from '../domain/User';

export const generateToken = (user: User) => {
    return Jwt.sign({ user }, 'secret-key', {
        expiresIn: '1h',
    });
};

export const verifyJWTToken = (token: string) => {
    return Jwt.verify(token, 'secret-key');
};
