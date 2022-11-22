import { Request, Response } from "express";

import * as userService from '../Service/userService'

const postLogin = async (req: Request, res: Response) => {
  const { type, message } = await userService.loginService(req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ token: message });
}

export { postLogin };