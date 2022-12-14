import { NextFunction, Request, Response } from 'express';

export default function error(err: Error, _req: Request, res: Response, _next: NextFunction) {
  const { name, message, stack } = err;
  switch (name) {
    case 'ValidationError':
      res.status(stack === 'any.required' ? 400 : 422).json({ message });
      break;
    case 'LoginError':
      res.status(401).json({ message });
      break;
    case 'JsonWebTokenError':
      res.status(401).json({ message: 'Invalid token' });
      break;
    default:
      res.status(500).json({ message: 'Internal Server Error' });
      break;
  }
}

// "JsonWebTokenError"