import { Router } from 'express';
import MatchController from '../Controller/matchController';

import tokenValidation from '../middlewares/jwtValidation';

const router = Router();
const matchController = new MatchController();

router.get('/', matchController.getAll.bind(matchController));
router.post('/', tokenValidation, matchController.createMatch.bind(matchController));
router.patch('/:id', matchController.updateMatchById.bind(matchController));
router.patch('/:id/finish', matchController.endMatchById.bind(matchController));

export default router;
