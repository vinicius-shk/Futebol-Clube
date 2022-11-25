import { Request, Response } from 'express';

import { getAllService, getFilteredService } from '../Service/matchService';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const { type, message } = !inProgress
    ? await getAllService() : await getFilteredService(JSON.parse(inProgress as string));
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

export default getAll;
