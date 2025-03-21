import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserModel } from '../domain/UserModel';

const createUserRoutes = (userModel: UserModel) => {
    const router = Router();

    const userController = new UserController(userModel);

    router.post('/user/login', userController.login);
    router.put('/user/update-password', userController.updatePassword);

    return router;
};

export default createUserRoutes;
