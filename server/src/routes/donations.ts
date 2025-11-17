import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

const donationRouter = Router();

const donationSchema = z.object({
  donorName: z.string().min(2),
  email: z.string().email().optional(),
  amount: z.number().positive(),
  currency: z.string().default('EUR'),
  project: z.string().optional(),
  method: z.string().optional(),
  message: z.string().optional(),
});

donationRouter.post('/', async (req, res) => {
  const parsed = donationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Datos inválidos', issues: parsed.error.flatten() });
  }

  try {
    const payload = parsed.data;
    const donation = await prisma.donation.create({
      data: {
        donorName: payload.donorName,
        email: payload.email ?? null,
        amount: payload.amount,
        currency: payload.currency ?? 'EUR',
        project: payload.project ?? null,
        method: payload.method ?? null,
        message: payload.message ?? null,
      },
    });
    return res.status(201).json({ ok: true, id: donation.id });
  } catch (error) {
    console.error('Donation error', error);
    return res.status(500).json({ message: 'No se pudo registrar la donación' });
  }
});

export { donationRouter };
