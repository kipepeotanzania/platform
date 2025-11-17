import { FormEvent, useState } from 'react';
import { apiFetch } from '@/lib/api';
import { useSectionScroll } from '@/hooks/useSectionScroll';

const benefits = [
  'Participar activamente en los proyectos y recibir actualizaciones exclusivas del impacto generado.',
  'Acceso a informes detallados sobre la evolución de los programas.',
  'Invitaciones a eventos, talleres y actividades solidarias.',
  'La satisfacción de saber que tu aportación rompe ciclos de pobreza y abre oportunidades educativas reales.',
];

const paymentMethods = ['Domiciliación bancaria', 'Transferencia', 'Tarjeta', 'PayPal'];

export default function CollaborateMember({ meta }: { meta?: any }) {
  const sectionId = 'colabora-ser-socio';
  useSectionScroll(sectionId);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quota, setQuota] = useState('mensual');
  const [payment, setPayment] = useState(paymentMethods[0].toLowerCase());
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    setError(null);
    const [firstName, ...rest] = fullName.trim().split(' ');
    const lastName = rest.join(' ') || firstName;
    try {
      await apiFetch('/applications/member', {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          contributionType: quota,
          paymentMethod: payment,
          message,
        }),
      });
      setFeedback('Solicitud de socio enviada. Te contactaremos por email.');
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setQuota('mensual');
      setPayment(paymentMethods[0].toLowerCase());
    } catch (err: any) {
      setError(err?.message || 'No pudimos enviar tu solicitud. Inténtalo otra vez.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={sectionId} className="section space-y-10 scroll-mt-32">
      <div
        className="rounded-3xl p-8 shadow-lg border border-white/60"
        style={{ background: 'var(--brand-gradient-soft)' }}
      >
        <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: 'var(--brand-primary)' }}>
          🤝 {meta?.breadcrumb || 'Ser socio/a'}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-3" style={{ color: 'var(--brand-text)' }}>
          {meta?.h1}
        </h1>
        <p className="text-lg mt-4" style={{ color: 'var(--brand-text)' }}>
          Hazte socio/a de Kipepeo y acompáñanos en cada paso. Al unirte, te sumas a una comunidad que cree en el poder
          transformador de la educación y sostiene proyectos que generan desarrollo sostenible y empoderamiento en
          Tanzania.
        </p>
        <p className="text-lg" style={{ color: 'var(--brand-text)' }}>
          Ser socio/a significa tender puentes entre España y Tanzania, fortaleciendo el intercambio cultural y educativo
          que da vida a nuestra misión diaria.
        </p>
        <a
          href="#form-socio"
          className="btn-primary mt-6 inline-flex items-center gap-2"
        >
          Hazte socio/a
        </a>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              💫 Beneficios
            </p>
            <ul className="list-disc pl-5 space-y-2" style={{ color: 'var(--brand-text)' }}>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              💶 Compromiso sugerido
            </p>
            <p style={{ color: 'var(--brand-text)' }}>
              La cuota mínima anual es de <strong>30 €</strong>, con opción a colaboración mensual o anual según tus
              posibilidades. Tú eliges el método de pago más cómodo y puedes modificarlo en cualquier momento.
            </p>
          </div>

          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              💛 Por qué?
            </p>
            <p style={{ color: 'var(--brand-text)' }}>
              Ser socio/a de Kipepeo es mucho más que una aportación económica: es sostener un proyecto vivo que genera
              educación, esperanza y transformación. Cada socio/a es un pilar que mantiene el vuelo de esta mariposa en
              Tanzania.
            </p>
          </div>
        </div>

        <form
          id="form-socio"
          className="card space-y-4 shadow-xl border border-white/80"
          style={{ background: 'var(--brand-surface)' }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
              Nombre completo
            </label>
            <input
              id="fullName"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="Tu nombre y apellidos"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              id="email"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="nombre@ejemplo.com"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
              Teléfono (opcional)
            </label>
            <input
              id="phone"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="+34 600 000 000"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="quota" className="block text-sm font-semibold text-gray-700">
                Tipo de cuota
              </label>
              <select
                id="quota"
                className="w-full border rounded-xl p-3 mt-1"
                value={quota}
                onChange={(event) => setQuota(event.target.value)}
              >
                <option value="mensual">Mensual</option>
                <option value="anual">Anual</option>
              </select>
            </div>
            <div>
              <label htmlFor="payment" className="block text-sm font-semibold text-gray-700">
                Método de pago
              </label>
              <select
                id="payment"
                className="w-full border rounded-xl p-3 mt-1"
                value={payment}
                onChange={(event) => setPayment(event.target.value)}
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method.toLowerCase()}>
                    {method}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Comentarios o mensaje (opcional)
            </label>
            <textarea
              id="message"
              className="w-full border rounded-xl p-3 mt-1"
              rows={4}
              placeholder="Cuéntanos más"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          {feedback && (
            <p className="text-sm" style={{ color: 'var(--brand-primary)' }}>
              {feedback}
            </p>
          )}
          {error && (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}
          <button className="btn-primary w-full" type="submit" disabled={submitting}>
            {submitting ? 'Enviando…' : 'Enviar solicitud'}
          </button>
        </form>
      </div>
    </section>
  );
}
