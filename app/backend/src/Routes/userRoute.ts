import { Router } from 'express';

import tokenValidation from '../middlewares/jwtValidation';
import UserController from '../Controller/userController';

const router = Router();
const userController = new UserController();

router.post('/', userController.postLogin.bind(userController));

router.get('/validate', tokenValidation, userController.validateLogin.bind(userController));

export default router;
