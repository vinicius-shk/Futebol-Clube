export default interface ICreateMatchBody {
  id?: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
}
