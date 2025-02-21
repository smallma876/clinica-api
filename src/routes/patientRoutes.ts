import { Router } from 'express';
import { PatientController } from '../controllers/patientController';

const router = Router();

router.get('/cli-api/patient/:id', PatientController.getPatientByDocument);

export default router;
