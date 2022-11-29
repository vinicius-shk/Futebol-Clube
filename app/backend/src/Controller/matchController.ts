import { Request, Response } from 'express';

import TeamService from '../Service/TeamService';
import createMatchSchema from '../Validations/createMatchSchema';
import MatchService from '../Service/matchService';

export default class MatchController {
  public matchService = new MatchService();
  public teamService = new TeamService();
  public async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const { type, message } = !inProgress
      ? await this.matchService.getAllService()
      : await this.matchService.getFilteredService(JSON.parse(inProgress as string));
    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
  }

  public async createMatch(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const { error } = createMatchSchema
      .validate({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
    if (error) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }
    const team1 = await this.teamService.getByIdService(homeTeam);
    const team2 = await this.teamService.getByIdService(awayTeam);
    if (team1.type || team2.type) {
      return res.status(team1.type as number).json({ message: team1.message });
    }
    const { type, message } = await this.matchService.createMatchService(
      { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals },
    );
    if (type) return res.status(type).json({ message });
    res.status(201).json(message);
  }

  public async endMatchById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { type, message } = await this.matchService.endMatchByIdService(id);
    if (type) return res.status(type).json({ message });
    res.status(200).json({ message });
  }

  public async updateMatchById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { type, message } = await this.matchService.updateMatchService(id, req.body);
    if (type) return res.status(type).json({ message });
    res.status(200).json({ message });
  }
}
