import Login from '../interfaces/login.interface';
import UserModel from '../models/user.model';
import jwt from './jwt.service';

export default class LoginService {
  constructor(private model: UserModel) {
    this.model = model;
  }

  public async login(login: Login): Promise<string> {
    console.log('Service');
    const { username, password } = login;
    const result = await this.model.findUsername(username);
    if (!result || result?.password !== password) {
      const error: Error = new Error('Username or password invalid');
      error.name = 'LoginError';
      throw error;
    }
    const { classe, level } = result;
    return jwt.sign({ username, classe, level });
  }
}