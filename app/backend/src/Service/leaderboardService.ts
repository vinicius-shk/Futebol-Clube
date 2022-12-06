import { gameListFilter, sortTeams, teamCalc, teamCalcBalance } from '../utils/leaderboard';
import ILeaderboard from '../Interfaces/Leaderboard/leaderboard';
import MatchService from './matchService';
import TeamService from './TeamService';

export default class LeaderboardService {
  public matchService = new MatchService();
  public teamService = new TeamService();
  public async getLeaderboard(): Promise<{ type: null | number, message: ILeaderboard[] }> {
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
    return { type: null, message: leaderboard };
  }

  public async getHomeLeaderboard(): Promise<{ type: null | number, message: ILeaderboard[] }> {
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
    return { type: null, message: leaderboard };
  }

  public async getAwayLeaderboard(): Promise<{ type: null | number, message: ILeaderboard[] }> {
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
    return { type: null, message: leaderboard };
  }
}
