import { Router } from "express";

import { postLogin } from '../Controller/userController';

const router = Router();

router.post('/', postLogin);

export default router;