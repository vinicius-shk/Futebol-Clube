import { Router } from 'express';

import tokenValidation from '../middlewares/jwtValidation';
import { getAll, createMatch, endMatchById, updateMatchById } from '../Controller/matchController';

const router = Router();

router.get('/', getAll);
router.post('/', tokenValidation, createMatch);
router.patch('/:id', updateMatchById);
router.patch('/:id/finish', endMatchById);

export default router;
