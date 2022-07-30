import Order from '../interfaces/order.interface';
import OrderModel from '../models/order.model';

export default class OrderService {
  constructor(private model: OrderModel) {
    this.model = model;
  }

  public async findAll(): Promise<Order[]> {
    return this.model.findAll();
  }
}