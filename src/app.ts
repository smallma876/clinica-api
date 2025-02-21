import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patientRoutes';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(patientRoutes);
app.use(authRoutes);

export default app;
