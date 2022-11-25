import { Router } from 'express';

import getAll from '../Controller/matchController';

const router = Router();

router.get('/', getAll);

export default router;
