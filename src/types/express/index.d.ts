// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as express from 'express';
import { User } from '../../domain/User';

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
