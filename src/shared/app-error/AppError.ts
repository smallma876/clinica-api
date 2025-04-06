export interface AppErrorProps {
    statusCode: number;
    message: string;
    code: string;
    stack?: string;
    isOperational?: boolean;
}

export class AppError extends Error {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly code: string;
    public readonly stack?: string;
    public readonly isOperational?: boolean;

    constructor({ statusCode, message, code = '', stack = '', isOperational = true }: AppErrorProps) {
        super(message);

        // Object.setPrototypeOf(this, new.target.prototype); // restaura la cadena de prototipo

        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.stack = stack;
        this.code = code;

        // Error.captureStackTrace(this);
    }
}
