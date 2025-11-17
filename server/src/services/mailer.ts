import nodemailer from 'nodemailer';
import { env } from '../config/env';

let transport: nodemailer.Transporter | null = null;
const hasSmtpConfig = Boolean(env.SMTP_HOST);

const createTransport = () =>
  nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT || 587,
    secure: false,
    auth: env.SMTP_USER
      ? {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS,
        }
      : undefined,
  });

if (hasSmtpConfig) {
  transport = createTransport();
}

export async function initMailer() {
  if (!transport) {
    console.info('MAIL_DEV_MODE=TRUE (sin SMTP configurado, se loguearán los emails)');
    return;
  }
  try {
    await transport.verify();
    console.info('MAIL_STATUS=OK');
  } catch (error) {
    console.warn('MAIL_DEV_MODE=TRUE (falló la verificación SMTP, se usará modo log)', error);
    transport = null;
  }
}

export async function sendMail(to: string, subject: string, html: string) {
  if (!hasSmtpConfig) {
    console.info('[mailer][dev-log]', { to, subject, html });
    return;
  }
  transport ??= createTransport();
  try {
    await transport.sendMail({ from: env.MAIL_FROM, to, subject, html });
  } catch (error) {
    console.error('Error enviando email', error);
  }
}
