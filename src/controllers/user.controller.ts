import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserContrller {
  constructor(private service: UserService) {
    this.service = service;
    this.create = this.create.bind(this);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const token = await this.service.create(req.body);
    res.status(201).json({ token });
  }
}