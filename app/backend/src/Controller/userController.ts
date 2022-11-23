import { Request, Response } from 'express';

import * as userService from '../Service/userService';
import loginSchema from '../Validations/loginSchema';

const postLogin = async (req: Request, res: Response) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { type, message } = await userService.loginService(req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ token: message });
};

export { postLogin };
  