import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

dotenv.config();

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('authorization');
    if (!token) return res.status(401).json({ message: 'Token must be a valid token' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidation;
