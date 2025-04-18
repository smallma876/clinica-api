import { Request, Response } from 'express';
import { generateToken } from '../utils/authUtils';
import { UserModel } from '../domain/UserModel';
import bcrypt from 'bcrypt';

export class UserController {
    authModel: UserModel;

    constructor(authModel: UserModel) {
        this.authModel = authModel;
    }

    login = async (req: Request, res: Response): Promise<void> => {
        const { document, password } = req.body;
        try {
            const user = await this.authModel.login(document);
            if (!user) {
                res.status(404).json({ message: 'user not founded' });
                return;
            }
            const isValidPassword = await bcrypt.compare(password, user.password_hash);
            if (!isValidPassword) {
                res.status(401).json({ message: 'Contrasena equivocada' });
                return;
            }

            res.cookie('Authorization', generateToken(user), {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'none',
            });
            res.status(200).json({ message: 'Login successfull' });
        } catch (error) {
            res.status(500).json(error);
        }
    };

    updatePassword = async (req: Request, res: Response) => {
        try {
            const { document, password } = req.body;
            const passwordHash = await bcrypt.hash(password, 10);
            const result = await this.authModel.updatePassword(document, passwordHash);
            const isUpdated = result.affectedRows > 0;
            if (isUpdated) {
                res.status(200).json({ message: 'Password updated' });
                return;
            }
            res.status(400).json({ message: 'Password not updated' });
        } catch (error) {
            res.status(500).json(error);
        }
    };

    register = async (req: Request, res: Response) => {
        try {
            /* to be implemented */
        } catch (error) {
            res.status(500).json(error);
        }
    };
}
