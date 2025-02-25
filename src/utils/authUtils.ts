import Jwt from 'jsonwebtoken';
import { RowDataPacket } from 'mysql2';

export const generateToken = (user: RowDataPacket) => {
    return Jwt.sign({ user }, 'secret-key', {
        expiresIn: '1h',
    });
};
