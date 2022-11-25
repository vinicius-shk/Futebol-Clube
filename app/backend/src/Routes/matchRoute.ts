import { Router } from 'express';

import tokenValidation from '../middlewares/jwtValidation';
import { getAll, createMatch } from '../Controller/matchController';

const router = Router();

router.get('/', getAll);
router.post('/', tokenValidation, createMatch);

export default router;
