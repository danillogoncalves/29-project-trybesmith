import { UserPrivate } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import jwt from './jwt.service';

export default class UserService {
  constructor(private model: UserModel) {
    this.model = model;
  }

  public async create(user: UserPrivate): Promise<string> {
    const result = await this.model.create(user);
    return jwt.sign(result);
  }
}