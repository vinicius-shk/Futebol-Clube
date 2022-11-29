import Team from '../database/models/TeamModel';

export default class TeamService {
  constructor(private team = Team) {}

  public async getAllService()
  : Promise<{ type: number | null, message: Team[] }> {
    const message = await this.team.findAll();
    return { type: null, message };
  }

  public async getByIdService(id: number)
    : Promise<{ type: number | null, message: Team | null | string }> {
    const message = await this.team.findByPk(id);
    if (!message) return { type: 404, message: 'There is no team with such id!' };
    return { type: null, message };
  }
}
