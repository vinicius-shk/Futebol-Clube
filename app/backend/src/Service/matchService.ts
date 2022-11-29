import IMatchResultBody from '../Interfaces/Match/updateMatchResult';
import ICreateMatchBody from '../Interfaces/Match/createMatch';
import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

export default class MatchService {
  constructor(private matches = Match) {}
  public async getAllService()
  : Promise<{ type: number | null, message: Match[] }> {
    const message = await this.matches.findAll({
      include: [{
        model: Team, as: 'teamHome',
      },
      {
        model: Team, as: 'teamAway',
      }],
    });
    return { type: null, message };
  }

  public async getFilteredService(query: boolean)
    : Promise<{ type: number | null, message: Match[] }> {
    const message = await this.matches.findAll({
      where: { inProgress: query },
      include: [{
        model: Team, as: 'teamHome',
      },
      {
        model: Team, as: 'teamAway',
      }],
    });
    return { type: null, message };
  }

  public async createMatchService(body: ICreateMatchBody)
    : Promise<{ type: number | null, message: ICreateMatchBody }> {
    const { id } = await this.matches.create({ ...body, inProgress: true });
    return { type: null, message: { id, ...body, inProgress: true } };
  }

  public async endMatchByIdService(id: number)
    : Promise<{ type: number | null, message: string }> {
    await this.matches.update({ inProgress: false }, {
      where: { id },
    });
    return { type: null, message: 'Finished' };
  }

  public async updateMatchService(id: number, body: IMatchResultBody)
    : Promise<{ type: number | null, message: string } > {
    const { homeTeamGoals, awayTeamGoals } = body;
    const [response] = await this.matches.update({ homeTeamGoals, awayTeamGoals }, {
      where: { id },
    });
    if (!response) return { type: 404, message: 'There is no team with such id!' };
    return { type: null, message: 'Match updated!' };
  }
}
