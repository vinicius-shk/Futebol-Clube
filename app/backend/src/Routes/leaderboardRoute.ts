import { Router } from 'express';

import {
  getAwayLeaderboard,
  getHomeLeaderboard,
  getLeaderboard } from '../Controller/leaderboardController';

const router = Router();

router.get('/', getLeaderboard);

router.get('/home', getHomeLeaderboard);

router.get('/away', getAwayLeaderboard);

export default router;
