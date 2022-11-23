import { Router } from 'express';

import { getAll, getById } from '../Controller/teamController';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);

export default router;
