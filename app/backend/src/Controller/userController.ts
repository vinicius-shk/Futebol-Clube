import { Request, Response } from 'express';

import UserService from '../Service/userService';
import loginSchema from '../Validations/loginSchema';

export default class UserController {
  public userService = new UserService();
  public postLogin = async (req: Request, res: Response) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    const { type, message } = await this.userService.loginService(req.body);
    if (type) return res.status(type).json({ message });
    res.status(200).json({ token: message });
  };

  public validateLogin = async (req: Request, res: Response) => {
    res.status(200).json({ role: req.body.user.role });
  };
}
