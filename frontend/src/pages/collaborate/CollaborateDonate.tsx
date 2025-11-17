import { FormEvent, useState } from 'react';
import { apiFetch } from '@/lib/api';
import { useSectionScroll } from '@/hooks/useSectionScroll';

const donationTypes = [
  {
    title: 'Donación única',
    description: 'Apoya un proyecto concreto o contribuye al fondo general para cubrir necesidades inmediatas.',
  },
  {
    title: 'Donación mensual',
    description: 'Garantiza la continuidad y sostenibilidad de los programas educativos y comunitarios.',
  },
];

const paymentOptions = ['Tarjeta', 'Transferencia', 'Bizum ONG 06123', 'PayPal'];

export default function CollaborateDonate({ meta }: { meta?: any }) {
  const sectionId = 'colabora-dona';
  useSectionScroll(sectionId);

  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [project, setProject] = useState('');
  const [method, setMethod] = useState(paymentOptions[0].toLowerCase());
  const [dedication, setDedication] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    setError(null);
    try {
      const optionalMessage = [dedication.trim(), phone ? `Tel: ${phone}` : null].filter(Boolean).join(' — ') || undefined;
      await apiFetch('/donations', {
        method: 'POST',
        body: JSON.stringify({
          donorName,
          email,
          amount: Number(amount),
          currency: 'EUR',
          project,
          method,
          message: optionalMessage,
        }),
      });
      setFeedback('Donación registrada. Gracias por tu apoyo.');
      setDonorName('');
      setEmail('');
      setPhone('');
      setAmount('');
      setProject('');
      setMethod(paymentOptions[0].toLowerCase());
      setDedication('');
    } catch (err: any) {
      setError(err?.message || 'No pudimos registrar la donación.');
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
          💛 {meta?.breadcrumb || 'Dona ahora'}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-3" style={{ color: 'var(--brand-text)' }}>
          {meta?.h1}
        </h1>
        <p className="text-lg mt-4" style={{ color: 'var(--brand-text)' }}>
          Cada donación cuenta. Gracias a ti seguimos ofreciendo educación de calidad, becas escolares, materiales,
          formación docente y bienestar comunitario.
        </p>
        <p className="text-lg" style={{ color: 'var(--brand-text)' }}>
          No importa el importe: cada contribución transforma una vida y ayuda a que más niñas y niños puedan estudiar,
          crecer y soñar.
        </p>
        <a href="#form-donar" className="btn-primary mt-6 inline-flex items-center gap-2">
          Dona ahora
        </a>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              💝 Tipos de donación
            </p>
            <ul className="space-y-3" style={{ color: 'var(--brand-text)' }}>
              {donationTypes.map((type) => (
                <li key={type.title}>
                  <p className="font-semibold" style={{ color: 'var(--brand-text)' }}>
                    {type.title}
                  </p>
                  <p style={{ color: 'var(--brand-muted)' }}>{type.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card space-y-2 text-sm" style={{ color: 'var(--brand-text)' }}>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--brand-muted)' }}>
              Datos bancarios
            </p>
            <p className="font-mono text-base">IBAN: ES12 3456 7890 1234 5678 9012 · Concepto: DONACIÓN KIPEPEO</p>
            <p className="font-mono text-base">Bizum ONG: 06123 · PayPal: paypal.me/kipepeo</p>
          </div>

          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              💬 Por qué?
            </p>
            <p style={{ color: 'var(--brand-text)' }}>
              Con tu donación sembramos oportunidades: construimos aulas, formamos docentes y abrimos caminos hacia un
              futuro mejor. Tu ayuda cambia vidas hoy y prepara el mañana para cientos de niñas y niños en Tanzania.
            </p>
          </div>
        </div>

        <form
          id="form-donar"
          className="card space-y-4 shadow-xl border border-white/80"
          style={{ background: 'var(--brand-surface)' }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="donorName" className="block text-sm font-semibold text-gray-700">
              Nombre completo
            </label>
            <input
              id="donorName"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="Nombre o entidad"
              autoComplete="name"
              required
              value={donorName}
              onChange={(event) => setDonorName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="donorEmail" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              id="donorEmail"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="nombre@ejemplo.com"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="donorPhone" className="block text-sm font-semibold text-gray-700">
              Teléfono (opcional)
            </label>
            <input
              id="donorPhone"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="+34 600 000 000"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="amount" className="block text-sm font-semibold text-gray-700">
                Importe a donar (€)
              </label>
              <input
                id="amount"
                className="w-full border rounded-xl p-3 mt-1"
                type="number"
                min="5"
                step="5"
                placeholder="Ej. 30"
                required
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-semibold text-gray-700">
                Selección de proyecto (opcional)
              </label>
              <select
                id="project"
                className="w-full border rounded-xl p-3 mt-1"
                value={project}
                onChange={(event) => setProject(event.target.value)}
              >
                <option value="">Fondo general</option>
                <option value="becas">Becas escolares</option>
                <option value="internado">Internado y alimentación</option>
                <option value="formacion">Formación docente</option>
                <option value="infraestructura">Infraestructura educativa</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-700">
              Método de pago
            </label>
            <select
              id="paymentMethod"
              className="w-full border rounded-xl p-3 mt-1"
              value={method}
              onChange={(event) => setMethod(event.target.value)}
            >
              {paymentOptions.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dedication" className="block text-sm font-semibold text-gray-700">
              Comentario o dedicatoria (opcional)
            </label>
            <textarea
              id="dedication"
              className="w-full border rounded-xl p-3 mt-1"
              rows={4}
              placeholder="Comparte el motivo de tu donación"
              value={dedication}
              onChange={(event) => setDedication(event.target.value)}
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
            {submitting ? 'Registrando…' : 'Confirmar donación'}
          </button>
        </form>
      </div>
    </section>
  );
}
