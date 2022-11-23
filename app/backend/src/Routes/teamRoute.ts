import { Router } from 'express';

import getAll from '../Controller/teamController';

const router = Router();

router.get('/', getAll);

export default router;
