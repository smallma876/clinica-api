import { Request, Response } from 'express';
import { AuthModel } from '../models/authModel';

export class AuthController {
    static async login(req: Request, res: Response): Promise<void> {
        const { document, password } = req.body;
        try {
            const token = await AuthModel.login(document, password);
            if (!token) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            res.cookie('auth_token13', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
            });
            res.status(200).json({ message: 'Login successfull' });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updatePassword(req, res) {
        const { document, password } = req.body;
        try {
            const success = await AuthModel.updatePassword(document, password);
            if (success) {
                res.status(200).json({
                    message: 'Password updated successfully',
                });
            } else {
                res.status(400).json({ message: 'Failed to update password' });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
