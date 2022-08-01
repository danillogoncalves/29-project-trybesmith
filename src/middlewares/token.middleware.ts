import { NextFunction, Request, Response } from 'express';
import { RequestToken } from '../interfaces/token.interface';
import jwtService from '../services/jwt.service';

export default function tokenMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const token = req.headers.authorization;
  if (!token) {
    const error = new Error('Token not found');
    error.name = 'LoginError';
    throw error;
  }
  const verifyToken = jwtService.verify(token);
  if (!verifyToken) {
    const error = new Error('Invalid token');
    error.name = 'LoginError';
    throw error;
  }
  const requestUser = req as RequestToken;
  requestUser.user = verifyToken.username;
  next();
}