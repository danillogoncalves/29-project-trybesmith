import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private service: ProductService) {
    this.service = service;
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  }

  public async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this.service.findAll();
    res.status(200).json(result);
  }
}