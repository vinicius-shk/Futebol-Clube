import { Request, Response } from 'express';

import getAllService from '../Service/teamService';

const getAll = async (req: Request, res: Response) => {
  const { type, message } = await getAllService();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

export default getAll;
