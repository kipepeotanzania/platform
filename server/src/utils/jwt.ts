import jwt, { type Secret, type SignOptions } from 'jsonwebtoken';
import { env } from '../config/env';

export type JwtPayload = {
  sub: string;
  role: string;
  email: string;
};

const jwtSecret: Secret = env.JWT_SECRET;

export const signToken = (payload: JwtPayload, expiresIn: SignOptions['expiresIn'] = '7d') => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, jwtSecret, options);
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, jwtSecret) as JwtPayload;
};
