import Product from '../interfaces/product.interface';
import ProductModel from '../models/product.model';

export default class ProductService {
  constructor(private model: ProductModel) {
    this.model = model;
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async findAll(): Promise<Product[]> {
    return this.model.findAll();
  }
}