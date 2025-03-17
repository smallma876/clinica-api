import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patientRoutes';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(patientRoutes);
app.use(authRoutes);

export default app;
