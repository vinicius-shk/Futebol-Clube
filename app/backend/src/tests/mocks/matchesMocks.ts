import ICreateMatchBody from "../../Interfaces/Match/createMatch";
import updateMatchResult from "../../Interfaces/Match/updateMatchResult";


export const matchesMock: ICreateMatchBody[] = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: true,
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
  },
];

export const ongoingMatches: ICreateMatchBody[] = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: true,
  },
];

export const finishedMatches: ICreateMatchBody[] = [
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
  },
];

export const createBody: ICreateMatchBody = {
  homeTeam: 3,
  homeTeamGoals: 4,
  awayTeam: 4,
  awayTeamGoals: 10,
  inProgress: true,
}

export const returnBodyCreate: any = {
  id: 42,
  homeTeam: 3,
  homeTeamGoals: 4,
  awayTeam: 4,
  awayTeamGoals: 10,
  inProgress: true,
}

export const updateScoreBody: updateMatchResult = {
    homeTeamGoals: 3,
    awayTeamGoals: 1
}