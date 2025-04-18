import { NextFunction, Request, Response } from 'express';
import { AppError } from '../shared/app-error/AppError';

export const errorConverter = (err: AppError | Error, req: Request, res: Response, next: NextFunction) => {
    let error = err;
    // to be implemented
    next(error);
};
