import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

dotenv.config();

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('authorization');
  if (!token) return res.status(401).json({ message: 'token not found' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  req.body.user = decoded;
  next();
};

export default tokenValidation;
