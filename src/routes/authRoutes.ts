import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();

router.post('/cli-api/auth/login', AuthController.login);
router.put('/cli-api/auth/update-password', AuthController.updatePassword);

export default router;
