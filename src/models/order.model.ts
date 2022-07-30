import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

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
}