import { NextFunction, Request, Response } from 'express';
import { AppError } from '../shared/app-error/AppError';
import httpStatus from 'http-status';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handlerError = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    let { message, statusCode, code } = err;

    if (!err.isOperational) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }

    const response = {
        code,
        message,
    };

    res.status(statusCode).send(response);
};
