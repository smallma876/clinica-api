import { Router } from 'express';
import { verifyToken } from '../middleware/verify-token.middleware';
import { PatientModel } from '../domain/PatientModel';
import { PatientController } from '../controllers/patientController';

const createPatientRoutes = (patientModel: PatientModel) => {
    const router = Router();

    const patientController = new PatientController(patientModel);

    router.get('/patient', verifyToken, patientController.getPatient);
    router.get('/patient/:id', patientController.getPatientByDocument);

    return router;
};

export default createPatientRoutes;
