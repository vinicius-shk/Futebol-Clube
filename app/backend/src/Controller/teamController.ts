import { Request, Response } from 'express';
import TeamService from '../Service/TeamService';

export default class TeamController {
  public teamService = new TeamService();

  public async getAll(_req: Request, res: Response) {
    const { type, message } = await this.teamService.getAllService();
    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
  }

  public async getById(req: Request, res: Response) {
    const { type, message } = await this.teamService.getByIdService(Number(req.params.id));
    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
  }
}
