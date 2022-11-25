import { Router } from 'express';

import tokenValidation from '../middlewares/jwtValidation';
import { postLogin, validateLogin } from '../Controller/userController';

const router = Router();

router.post('/', postLogin);

router.get('/validate', tokenValidation, validateLogin);

export default router;
