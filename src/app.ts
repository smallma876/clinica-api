import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UserModel } from './domain/UserModel';
import createPatientRoutes from './routes/patientRoutes';
import { PatientModel } from './domain/PatientModel';
import 'dotenv/config';
import createUserRoutes from './routes/userRoutes';
import { handlerError } from './middleware/error-handler';
import { errorConverter } from './middleware/error-convert';

interface CreateAppProps {
    userModel: UserModel;
    patientModel: PatientModel;
}

const allowedOrigins = ['http://localhost:5173', 'https://clinica-authorization-production.up.railway.app/'];

export const createApp = ({ userModel, patientModel }: CreateAppProps) => {
    const app = express();
    app.use(
        cors({
            origin: (origin, callback) => {
                // Permitir peticiones sin origin (como curl o Postman)
                if (!origin) return callback(null, true);
                if (allowedOrigins.includes(origin)) {
                    return callback(null, true);
                } else {
                    return callback(new Error('No permitido por CORS'));
                }
            }, // Cambia por el dominio real de tu frontend
            credentials: true,
        })
    );
    app.use(express.json());
    app.use(cookieParser());

    app.use('/cli-api', createPatientRoutes(patientModel));
    app.use('/cli-api', createUserRoutes(userModel));

    app.use(errorConverter);
    app.use(handlerError);

    const PORT = process.env.PORT;
    app.listen(PORT, () => {});
};
