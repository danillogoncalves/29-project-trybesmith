import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import UserModel from './user.model';

export default class OrderModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<Order[]> {
    const QUERY = `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
    GROUP BY O.id
    ORDER BY O.userId ASC`;
    const [result] = await this.connection.query(QUERY);
    return result as Order[];
  }

  public async create(order: number[], username: string): Promise<Order> {
    const userModel = new UserModel(this.connection);
    const user = await userModel.findUsername(username);
    const QUERY_ORDER = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const resultOrder = await this.connection.query<ResultSetHeader>(QUERY_ORDER, user?.id);
    const [{ insertId }] = resultOrder;
    const QUERY_PRODUCT = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await Promise.all(order
      .map(async (id) => this.connection.query(QUERY_PRODUCT, [insertId, id])));
    return { userId: user?.id, productsIds: order };
  }
}