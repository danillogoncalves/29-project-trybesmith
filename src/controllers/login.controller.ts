import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import loginValidation from '../validations/login.validations';

export default class LoginController {
  constructor(private service: LoginService) {
    this.service = service;
    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response): Promise<void> {
    const validate = loginValidation(req.body);
    const token = await this.service.login(validate);
    res.status(200).json({ token });
  }
}