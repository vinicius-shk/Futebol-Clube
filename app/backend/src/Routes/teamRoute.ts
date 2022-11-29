import { Router } from 'express';
import TeamController from '../Controller/teamController';

const router = Router();
const teamController = new TeamController();

router.get('/', teamController.getAll.bind(teamController));
router.get('/:id', teamController.getById.bind(teamController));

export default router;
