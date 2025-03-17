import { Router } from 'express';
import { PatientController } from '../controllers/patientController';
import { verifyToken } from '../middleware/verify-token.middleware';

const router = Router();

router.get('/cli-api/patient', verifyToken, PatientController.getPatient);

export default router;
