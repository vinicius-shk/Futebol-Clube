import { Request, Response } from 'express';

import { getAllService, getFilteredService, createMatchService } from '../Service/matchService';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const { type, message } = !inProgress
    ? await getAllService() : await getFilteredService(JSON.parse(inProgress as string));
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const createMatch = async (req: Request, res: Response) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
  const { type, message } = await createMatchService({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
  });
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

export { getAll, createMatch };
