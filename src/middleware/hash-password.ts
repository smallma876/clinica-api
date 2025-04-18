import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

export const hashPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    req.body = {
        ...req.body,
        password: passwordHash,
    };

    next();
};
