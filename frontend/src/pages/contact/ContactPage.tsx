import { FormEvent, useState } from 'react';
import { apiFetch } from '@/lib/api';

export default function ContactPage({ meta }: { meta?: any }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    setError(null);
    try {
      await apiFetch('/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email, subject, message }),
      });
      setFeedback('¡Gracias por escribirnos! Te responderemos muy pronto.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setError(err?.message || 'No pudimos enviar tu mensaje. Inténtalo nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section space-y-8">
      <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1}</h1>
      <p>Escríbenos para conocer más sobre proyectos, colaboraciones o prensa. Respondemos en menos de 48 horas hábiles.</p>
      <form className="card space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm" htmlFor="name">
            Nombre completo
          </label>
          <input
            id="name"
            className="w-full border rounded-xl p-3"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded-xl p-3"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="subject">
            Asunto
          </label>
          <input
            id="subject"
            className="w-full border rounded-xl p-3"
            placeholder="Colaboración, donación, viaje..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            className="w-full border rounded-xl p-3"
            rows={4}
            placeholder="Cuéntanos en qué podemos ayudarte"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        {feedback && <p className="text-sm text-emerald-600">{feedback}</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="btn-primary w-full" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </form>
    </section>
  );
}
