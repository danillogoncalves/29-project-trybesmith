import { Request, Response } from 'express';
import { RequestToken } from '../interfaces/token.interface';
import OrderService from '../services/order.service';
import orderValidation from '../validations/order.validations';

export default class OrderController {
  constructor(private service: OrderService) {
    this.service = service;
    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
  }

  public async findAll(_req: Request, res: Response) {
    const result = await this.service.findAll();
    res.status(200).json(result);
  }

  public async create(req: Request, res: Response) {
    const validate = orderValidation(req.body);
    const { productsIds } = validate;
    const { user } = req as RequestToken;
    const result = await this.service.create(productsIds, user);
    res.status(201).json(result);
  }
}