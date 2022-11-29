import { Request, Response } from 'express';
import { gameListFilter, sortTeams, teamCalc, teamCalcBalance } from '../utils/leaderboard';
import ILeaderboard from '../Interfaces/Leaderboard/leaderboard';
import { getAllService as matchList } from '../Service/matchService';
import { getAllService as teamList } from '../Service/teamService';

const getLeaderboard = async (req: Request, res: Response) => {
  const { message: teams } = await teamList();
  const { message: matches } = await matchList();
  const leaderboard: ILeaderboard[] = [];
  teams.forEach(({ id, teamName }) => {
    const teamGamesList = gameListFilter(matches, id, null);
    const teamResult = teamCalc(teamGamesList, id, teamName);
    teamCalcBalance(teamResult);
    leaderboard.push(teamResult);
  });
  sortTeams(leaderboard);
  res.status(200).json(leaderboard);
};

const getHomeLeaderboard = async (req: Request, res: Response) => {
  const { message: teams } = await teamList();
  const { message: matches } = await matchList();
  const leaderboard: ILeaderboard[] = [];
  teams.forEach(({ id, teamName }) => {
    const teamGamesList = gameListFilter(matches, id, 'home');
    const teamResult = teamCalc(teamGamesList, id, teamName);
    teamCalcBalance(teamResult);
    leaderboard.push(teamResult);
  });
  sortTeams(leaderboard);
  res.status(200).json(leaderboard);
};

const getAwayLeaderboard = async (req: Request, res: Response) => {
  const { message: teams } = await teamList();
  const { message: matches } = await matchList();
  const leaderboard: ILeaderboard[] = [];
  teams.forEach(({ id, teamName }) => {
    const teamGamesList = gameListFilter(matches, id, 'away');
    const teamResult = teamCalc(teamGamesList, id, teamName);
    teamCalcBalance(teamResult);
    leaderboard.push(teamResult);
  });
  sortTeams(leaderboard);
  res.status(200).json(leaderboard);
};

export { getLeaderboard, getHomeLeaderboard, getAwayLeaderboard };
