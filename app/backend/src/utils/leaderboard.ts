import Match from '../database/models/MatchModel';
import ILeaderboard from '../Interfaces/Leaderboard/leaderboard';

export const defaultResult = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: '',
};

export const teamCalc = (teamGamesList: Match[], id: number, teamName: string): ILeaderboard => (
  teamGamesList.reduce((acc: ILeaderboard, cur: Match): ILeaderboard => {
    acc.totalGames += 1;
    acc.name = teamName;
    if (cur.homeTeam === id) {
      if (cur.homeTeamGoals > cur.awayTeamGoals) acc.totalVictories += 1;
      acc.goalsFavor += cur.homeTeamGoals;
      acc.goalsOwn += cur.awayTeamGoals;
    }
    if (cur.awayTeam === id) {
      if (cur.homeTeamGoals < cur.awayTeamGoals) acc.totalVictories += 1;
      acc.goalsFavor += cur.awayTeamGoals;
      acc.goalsOwn += cur.homeTeamGoals;
    }
    if (cur.homeTeamGoals === cur.awayTeamGoals) acc.totalDraws += 1;
    return acc;
  }, { ...defaultResult }));

export const teamCalcBalance = (leaderboards: ILeaderboard): void => {
  const t = leaderboards;
  t.goalsBalance = t.goalsFavor - t.goalsOwn;
  t.totalLosses = t.totalGames - t.totalVictories - t.totalDraws;
  t.totalPoints = t.totalVictories * 3 + t.totalDraws;
  t.efficiency = ((t.totalPoints / (t.totalGames * 3)) * 100).toFixed(2);
};

export const sortTeams = (leaderboard: ILeaderboard[]): void => {
  leaderboard.sort((a, b) => (
    b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn
  ));
};
