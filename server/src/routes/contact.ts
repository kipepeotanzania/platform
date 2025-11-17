import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { sendMail } from '../services/mailer';
import { env } from '../config/env';

const contactRouter = Router();

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().email(),
  subject: z.string().trim().min(2).optional(),
  message: z.string().trim().min(5),
});

contactRouter.post('/', async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Datos inválidos', issues: parsed.error.flatten() });
  }

  try {
    const payload = parsed.data;
    const normalizedSubject = payload.subject?.trim() || 'Consulta web';
    const infoRequest = await prisma.infoRequest.create({
      data: {
        name: payload.name,
        email: payload.email,
        subject: normalizedSubject,
        message: payload.message,
      },
    });

    const emailHtml = `
      <h2>Nueva solicitud de información</h2>
      <p><strong>Nombre:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Asunto:</strong> ${payload.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${payload.message.replace(/\n/g, '<br/>')}</p>
    `;

    await sendMail(env.CONTACT_INBOX, `Contacto web: ${normalizedSubject}`, emailHtml);

    return res.status(201).json({ ok: true, id: infoRequest.id });
  } catch (error) {
    console.error('Contact form error', error);
    return res.status(500).json({ message: 'No se pudo enviar el mensaje' });
  }
});

export { contactRouter };
