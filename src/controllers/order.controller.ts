import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private service: OrderService) {
    this.service = service;
    this.findAll = this.findAll.bind(this);
  }

  public async findAll(req: Request, res: Response) {
    const result = await this.service.findAll();
    res.status(200).json(result);
  }
}