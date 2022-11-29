import * as dotenv from 'dotenv';
import { compareSync } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import ILoginBody from '../Interfaces/User/loginBody';
import User from '../database/models/UserModel';

dotenv.config();

export default class UserService {
  constructor(private users = User) {}

  public loginService = async (body: ILoginBody)
  : Promise<{ type: number | null, message: string }> => {
    const response = await this.users.findOne({ where: { email: body.email } });
    if (!response || !compareSync(body.password, response.password)) {
      return { type: 401, message: 'Incorrect email or password' };
    }
    const { email, id, username, role } = response;
    const token = jwt.sign({ email, id, username, role }, process.env.JWT_SECRET as string);
    return { type: null, message: token };
  };
}
