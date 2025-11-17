import path from 'node:path';
import dotenv from 'dotenv';

const rootEnvPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: rootEnvPath });

const required = (name: string, fallback?: string) => {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable ${name}`);
  }
  return value;
};

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(process.env.PORT ?? 4000),
  FRONTEND_URL: process.env.FRONTEND_URL ?? 'http://localhost:5173',
  DATABASE_URL: required('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/kipepeo'),
  JWT_SECRET: required('JWT_SECRET', 'dev-secret-change-me'),
  INVITE_EXPIRATION_HOURS: Number(process.env.INVITE_EXPIRATION_HOURS ?? 72),
  MAIL_FROM: process.env.MAIL_FROM ?? 'no-reply@kipepeo.ngo',
  CONTACT_INBOX: process.env.CONTACT_INBOX ?? 'info@kipepeo.ngo',
  SMTP_HOST: process.env.SMTP_HOST ?? '',
  SMTP_PORT: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
  SMTP_USER: process.env.SMTP_USER ?? '',
  SMTP_PASS: process.env.SMTP_PASS ?? '',
};
