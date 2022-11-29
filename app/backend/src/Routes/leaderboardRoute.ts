import { Router } from 'express';

import LeaderboardController from '../Controller/leaderboardController';

const router = Router();
const leaderboardController = new LeaderboardController();

router.get('/', leaderboardController.getLeaderboard.bind(leaderboardController));

router.get('/home', leaderboardController.getHomeLeaderboard.bind(leaderboardController));

router.get('/away', leaderboardController.getAwayLeaderboard.bind(leaderboardController));

export default router;
