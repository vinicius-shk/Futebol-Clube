import { Request, Response } from 'express';

import { getAllService, getByIdService } from '../Service/teamService';

const getAll = async (_req: Request, res: Response) => {
  const { type, message } = await getAllService();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const getById = async (req: Request, res: Response) => {
  const { type, message } = await getByIdService(Number(req.params.id));
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

export { getAll, getById };
