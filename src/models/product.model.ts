import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const QUERY = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection.query<ResultSetHeader>(
      QUERY,
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async findAll(): Promise<Product[]> {
    const QUERY = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.query(QUERY);
    return result as Product[];
  }
}
