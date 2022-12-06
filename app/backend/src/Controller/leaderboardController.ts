import { Request, Response } from 'express';
import LeaderboardService from '../Service/leaderboardService';

export default class LeaderboardController {
  public leaderboardService = new LeaderboardService();
  public async getLeaderboard(req: Request, res: Response) {
    const { message } = await this.leaderboardService.getLeaderboard();
    res.status(200).json(message);
  }

  public async getHomeLeaderboard(req: Request, res: Response) {
    const { message } = await this.leaderboardService.getHomeLeaderboard();
    res.status(200).json(message);
  }

  public async getAwayLeaderboard(req: Request, res: Response) {
    const { message } = await this.leaderboardService.getAwayLeaderboard();
    res.status(200).json(message);
  }
}
