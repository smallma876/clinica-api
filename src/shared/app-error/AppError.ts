export class AppError extends Error {
    public readonly name: string;
    public readonly code: string;
    public readonly title: string;
    public readonly message: string;

    constructor(name: string, code: string, title: string, message: string) {
        super(message);

        // Object.setPrototypeOf(this, new.target.prototype); // restaura la cadena de prototipo

        this.name = name;
        this.code = code;
        this.title = title;
        this.message = message;

        // Error.captureStackTrace(this);
    }
}
