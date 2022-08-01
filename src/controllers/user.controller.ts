import { Request, Response } from 'express';
import UserService from '../services/user.service';
import userValidation from '../validations/user.validations';

export default class UserContrller {
  constructor(private service: UserService) {
    this.service = service;
    this.create = this.create.bind(this);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const validate = userValidation(req.body);
    const token = await this.service.create(validate);
    res.status(201).json({ token });
  }
}