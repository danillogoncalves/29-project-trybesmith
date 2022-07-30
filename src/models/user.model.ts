import { Pool, ResultSetHeader } from 'mysql2/promise';
import { UserPrivate, UserPublic } from '../interfaces/user.interface';

export default class UserModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async create(user: UserPrivate): Promise<UserPublic> {
    const { username, classe, level, password } = user;
    const QUERY = `INSERT INTO
    Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    await this.connection.query<ResultSetHeader>(
      QUERY,
      [username, classe, level, password],
    );
    return { username, classe, level };
  }
}