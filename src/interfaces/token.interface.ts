import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestToken extends Request {
  user: string,
}

export interface JwtPayloadToken extends JwtPayload {
  username: string,
}