import { Router } from 'express';

import getLeaderboard from '../Controller/leaderboardController';

const router = Router();

router.get('/', getLeaderboard);

export default router;
