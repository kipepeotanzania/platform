import { Router } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';
import { signToken } from '../utils/jwt';
import { env } from '../config/env';
import { InvitationStatus, Role } from '@prisma/client';

const authRouter = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

authRouter.post('/login', async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Invalid payload', issues: parsed.error.flatten() });
  }

  const { email, password } = parsed.data;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    if (!user.isActive) {
      return res.status(403).json({ message: 'Cuenta pendiente de activación' });
    }

    const token = signToken({ sub: user.id, email: user.email, role: user.role });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl,
        bio: user.bio,
        interests: user.interests,
      },
    });
  } catch (error) {
    if (env.NODE_ENV !== 'production') {
      console.error('Login error', error);
    }
    return res.status(500).json({ message: 'Error interno' });
  }
});

const registerSchema = z.object({
  token: z.string().optional(),
  email: z.string().email(),
  role: z.nativeEnum(Role),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  password: z.string().min(8),
});

authRouter.post('/register', async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Invalid payload', issues: parsed.error.flatten() });
  }

  const { token, firstName, lastName, password, email, role } = parsed.data;

  try {
    const invitation = await prisma.invitation.findFirst({
      where: {
        email,
        role,
        status: InvitationStatus.SENT,
        ...(token ? { token } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
    if (!invitation || invitation.status !== InvitationStatus.SENT) {
      return res.status(400).json({ message: 'Invitación no válida' });
    }
    if (invitation.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Invitación expirada' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.upsert({
      where: { email: invitation.email },
      update: {
        firstName,
        lastName,
        password: hashedPassword,
        role: invitation.role,
        isActive: true,
      },
      create: {
        email: invitation.email,
        firstName,
        lastName,
        password: hashedPassword,
        role: invitation.role ?? Role.MEMBER,
        isActive: true,
      },
    });

    await prisma.invitation.update({
      where: { id: invitation.id },
      data: {
        status: InvitationStatus.COMPLETED,
        completedAt: new Date(),
        userId: user.id,
      },
    });

    const [memberProfile, volunteerApp, travelerApp] = await Promise.all([
      prisma.memberProfile.findFirst({ where: { email: invitation.email }, orderBy: { createdAt: 'desc' } }),
      prisma.volunteerApplication.findFirst({ where: { email: invitation.email }, orderBy: { createdAt: 'desc' } }),
      prisma.travelerApplication.findFirst({ where: { email: invitation.email }, orderBy: { createdAt: 'desc' } }),
    ]);

    if (memberProfile && !memberProfile.userId) {
      await prisma.memberProfile.update({ where: { id: memberProfile.id }, data: { userId: user.id } });
    }
    if (volunteerApp && !volunteerApp.userId) {
      await prisma.volunteerApplication.update({ where: { id: volunteerApp.id }, data: { userId: user.id } });
    }
    if (travelerApp && !travelerApp.userId) {
      await prisma.travelerApplication.update({ where: { id: travelerApp.id }, data: { userId: user.id } });
    }

    const authToken = signToken({ sub: user.id, email: user.email, role: user.role });
    return res.json({
      token: authToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl,
        bio: user.bio,
        interests: user.interests,
      },
    });
  } catch (error) {
    if (env.NODE_ENV !== 'production') {
      console.error('Register error', error);
    }
    return res.status(500).json({ message: 'Error interno' });
  }
});

export { authRouter };
