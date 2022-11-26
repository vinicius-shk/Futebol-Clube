import { Request, Response } from 'express';
import { getByIdService } from '../Service/teamService';
import createMatchSchema from '../Validations/createMatchSchema';

import {
  getAllService,
  getFilteredService,
  createMatchService,
  endMatchByIdService,
  updateMatchService } from '../Service/matchService';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const { type, message } = !inProgress
    ? await getAllService() : await getFilteredService(JSON.parse(inProgress as string));
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const createMatch = async (req: Request, res: Response) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
  const { error } = createMatchSchema
    .validate({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
  if (error) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  const team1 = await getByIdService(homeTeam);
  const team2 = await getByIdService(awayTeam);
  if (team1.type || team2.type) {
    return res.status(team1.type as number).json({ message: team1.message });
  }
  const { type, message } = await createMatchService(
    { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals },
  );
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

const endMatchById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { type, message } = await endMatchByIdService(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ message });
};

const updateMatchById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { type, message } = await updateMatchService(id, req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ message });
};

export { getAll, createMatch, endMatchById, updateMatchById };
