import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UserModel } from './domain/UserModel';
import createPatientRoutes from './routes/patientRoutes';
import { PatientModel } from './domain/PatientModel';
import 'dotenv/config';
import createUserRoutes from './routes/userRoutes';

interface CreateAppProps {
    userModel: UserModel;
    patientModel: PatientModel;
}

export const createApp = ({ userModel, patientModel }: CreateAppProps) => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());

    app.use('/cli-api', createPatientRoutes(patientModel));
    app.use('/cli-api', createUserRoutes(userModel));

    const PORT = process.env.PORT;
    app.listen(PORT, () => {});
};
