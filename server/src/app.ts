import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { env } from './config/env';
import { router } from './routes';

const app = express();

const allowedOrigins = env.FRONTEND_URL.split(',').map((origin) => origin.trim()).filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      // allow localhost wildcard (port can change)
      if (origin.startsWith('http://localhost') && allowedOrigins.some((o) => o.startsWith('http://localhost'))) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', router);

export { app };
