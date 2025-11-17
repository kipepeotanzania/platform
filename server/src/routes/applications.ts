import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

const applicationRouter = Router();

const memberSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  contributionType: z.string().optional(),
  paymentMethod: z.string().optional(),
  message: z.string().max(1000).optional(),
});

applicationRouter.post('/member', async (req, res) => {
  const parsed = memberSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Datos inválidos', issues: parsed.error.flatten() });
  }
  try {
    const payload = parsed.data;
    const profile = await prisma.memberProfile.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone ?? null,
        contributionType: payload.contributionType ?? null,
        paymentMethod: payload.paymentMethod ?? null,
        message: payload.message ?? null,
      },
    });
    return res.status(201).json({ ok: true, id: profile.id });
  } catch (error) {
    console.error('Member application error', error);
    return res.status(500).json({ message: 'No se pudo registrar la solicitud' });
  }
});

const volunteerSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  institution: z.string().optional(),
  contact: z.string().optional(),
  area: z.string().min(2),
  modality: z.enum(['remoto', 'terreno', 'institucional']),
  message: z.string().max(1200).optional(),
});

applicationRouter.post('/volunteer', async (req, res) => {
  const parsed = volunteerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Datos inválidos', issues: parsed.error.flatten() });
  }
  try {
    const payload = parsed.data;
    const app = await prisma.volunteerApplication.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone ?? null,
        institution: payload.institution ?? null,
        contact: payload.contact ?? null,
        area: payload.area ?? null,
        modality: payload.modality ?? null,
        message: payload.message ?? null,
      },
    });
    return res.status(201).json({ ok: true, id: app.id });
  } catch (error) {
    console.error('Volunteer application error', error);
    return res.status(500).json({ message: 'No se pudo registrar la solicitud' });
  }
});

const travelerSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  dates: z.string().optional(),
  message: z.string().max(1200).optional(),
});

applicationRouter.post('/traveler', async (req, res) => {
  const parsed = travelerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Datos inválidos', issues: parsed.error.flatten() });
  }
  try {
    const payload = parsed.data;
    const app = await prisma.travelerApplication.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone ?? null,
        dates: payload.dates ?? null,
        message: payload.message ?? null,
      },
    });
    return res.status(201).json({ ok: true, id: app.id });
  } catch (error) {
    console.error('Traveler application error', error);
    return res.status(500).json({ message: 'No se pudo registrar la solicitud' });
  }
});

export { applicationRouter };
