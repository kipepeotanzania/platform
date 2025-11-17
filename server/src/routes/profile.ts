import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { requireAuth, AuthenticatedRequest } from '../middleware/auth';

const profileRouter = Router();

profileRouter.use(requireAuth);

const sanitizeUser = (user: any) => ({
  id: user.id,
  email: user.email,
  role: user.role,
  firstName: user.firstName,
  lastName: user.lastName,
  avatarUrl: user.avatarUrl,
  bio: user.bio,
  interests: user.interests,
  memberProfile: user.memberProfile,
  volunteerApp: user.volunteerApp,
  travelerApp: user.travelerApp,
  donations: user.donations,
});

profileRouter.get('/me', async (req: AuthenticatedRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    include: {
      memberProfile: true,
      volunteerApp: true,
      travelerApp: true,
      donations: true,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  return res.json({ ok: true, user: sanitizeUser(user) });
});

const updateSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  avatarUrl: z.string().url().optional().or(z.literal('')),
  bio: z.string().max(500).optional(),
  interests: z.string().max(500).optional(),
});

profileRouter.put('/', async (req: AuthenticatedRequest, res) => {
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Datos inválidos', issues: parsed.error.flatten() });
  }

  const payload = parsed.data;
  const updateData: Record<string, any> = {};
  if (payload.firstName !== undefined) updateData.firstName = payload.firstName;
  if (payload.lastName !== undefined) updateData.lastName = payload.lastName;
  if (payload.avatarUrl !== undefined) updateData.avatarUrl = payload.avatarUrl === '' ? null : payload.avatarUrl;
  if (payload.bio !== undefined) updateData.bio = payload.bio;
  if (payload.interests !== undefined) updateData.interests = payload.interests;

  const updated = await prisma.user.update({
    where: { id: req.user!.id },
    data: updateData,
    include: {
      memberProfile: true,
      volunteerApp: true,
      travelerApp: true,
      donations: true,
    },
  });

  return res.json({ ok: true, user: sanitizeUser(updated) });
});

export { profileRouter };
