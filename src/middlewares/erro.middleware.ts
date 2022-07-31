import { NextFunction, Request, Response } from 'express';

export default function error(
  err: Error,
  req: Request, 
  res: Response,
  _next: NextFunction,
) {
  const { name, message } = err as Error;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'LoginError':
      res.status(401).json({ message });
      break;
    default:
      res.status(500).json({ message: 'Internal Server Error' });
      break;
  }
}