import { NextFunction, Response } from 'express';
import jwtService from '../services/jwt.service';

export default function tokenMiddleware(req: any, _res: Response, next: NextFunction): void {
  const token = req.headers.authorization;
  if (!token) {
    const error = new Error('Token not found');
    error.name = 'LoginError';
    throw error;
  }
  const verifyToken: any = jwtService.verify(token);
  if (!verifyToken) {
    const error = new Error('Invalid token');
    error.name = 'LoginError';
    throw error;
  }
  req.user = verifyToken.username;
  next();
}