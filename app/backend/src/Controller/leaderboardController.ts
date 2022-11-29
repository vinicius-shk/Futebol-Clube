import { Request, Response } from 'express';
import { gameListFilter, sortTeams, teamCalc, teamCalcBalance } from '../utils/leaderboard';
import ILeaderboard from '../Interfaces/Leaderboard/leaderboard';
import MatchService from '../Service/matchService';
import TeamService from '../Service/TeamService';

export default class LeaderboardController {
  public matchService = new MatchService();
  public teamService = new TeamService();
  public async getLeaderboard(req: Request, res: Response) {
    const { message: teams } = await this.teamService.getAllService();
    const { message: matches } = await this.matchService.getAllService();
    const leaderboard: ILeaderboard[] = [];
    teams.forEach(({ id, teamName }) => {
      const teamGamesList = gameListFilter(matches, id, null);
      const teamResult = teamCalc(teamGamesList, id, teamName);
      teamCalcBalance(teamResult);
      leaderboard.push(teamResult);
    });
    sortTeams(leaderboard);
    res.status(200).json(leaderboard);
  }

  public async getHomeLeaderboard(req: Request, res: Response) {
    const { message: teams } = await this.teamService.getAllService();
    const { message: matches } = await this.matchService.getAllService();
    const leaderboard: ILeaderboard[] = [];
    teams.forEach(({ id, teamName }) => {
      const teamGamesList = gameListFilter(matches, id, 'home');
      const teamResult = teamCalc(teamGamesList, id, teamName);
      teamCalcBalance(teamResult);
      leaderboard.push(teamResult);
    });
    sortTeams(leaderboard);
    res.status(200).json(leaderboard);
  }

  public async getAwayLeaderboard(req: Request, res: Response) {
    const { message: teams } = await this.teamService.getAllService();
    const { message: matches } = await this.matchService.getAllService();
    const leaderboard: ILeaderboard[] = [];
    teams.forEach(({ id, teamName }) => {
      const teamGamesList = gameListFilter(matches, id, 'away');
      const teamResult = teamCalc(teamGamesList, id, teamName);
      teamCalcBalance(teamResult);
      leaderboard.push(teamResult);
    });
    sortTeams(leaderboard);
    res.status(200).json(leaderboard);
  }
}
