import { FormEvent, useState } from 'react';
import { apiFetch } from '@/lib/api';
import { useSectionScroll } from '@/hooks/useSectionScroll';

const programs = [
  'Educación y desarrollo comunitario',
  'Formación docente y talleres especializados',
  'Intercambios culturales y académicos',
  'Proyectos de investigación aplicada',
];

const otherModalities = [
  'Voluntariado individual en terreno: apoyo en escuelas, talleres y actividades locales en Tanzania.',
  'Voluntariado remoto: participación online en comunicación, recaudación de fondos y seguimiento de proyectos.',
];

export default function CollaborateVolunteer({ meta }: { meta?: any }) {
  const sectionId = 'colabora-voluntariado';
  useSectionScroll(sectionId);

  const [institution, setInstitution] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('educacion');
  const [modality, setModality] = useState<'remoto' | 'terreno' | 'institucional'>('institucional');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    setError(null);
    const [firstName, ...rest] = contactName.trim().split(' ');
    const lastName = rest.join(' ') || firstName;
    try {
      await apiFetch('/applications/volunteer', {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          institution,
          contact: contactName,
          area,
          modality,
          message,
        }),
      });
      setFeedback('Solicitud de voluntariado enviada. Nos pondremos en contacto por email.');
      setInstitution('');
      setContactName('');
      setEmail('');
      setPhone('');
      setArea('educacion');
      setModality('institucional');
      setMessage('');
    } catch (err: any) {
      setError(err?.message || 'No pudimos enviar la solicitud.');
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
          🌍 {meta?.breadcrumb || 'Voluntariado'}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-3" style={{ color: 'var(--brand-text)' }}>
          {meta?.h1}
        </h1>
        <p className="text-lg mt-4" style={{ color: 'var(--brand-text)' }}>
          Únete a Kipepeo y construyamos puentes. Creemos en el voluntariado como herramienta de transformación mutua:
          cada experiencia es un intercambio de conocimiento, cultura y compromiso que enriquece a quienes ayudan y a
          quienes reciben apoyo.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              🧩 Colaboración con organizaciones e instituciones
            </p>
            <p style={{ color: 'var(--brand-text)' }}>
              Nuestro modelo prioritario consiste en alianzas estratégicas con universidades, ONG y asociaciones que
              diseñan proyectos conjuntos de largo plazo. Estas colaboraciones combinan recursos y saberes, generando un
              impacto educativo y comunitario más sólido.
            </p>
            <p>Diseñamos programas de:</p>
            <ul className="list-disc pl-5 space-y-2" style={{ color: 'var(--brand-text)' }}>
              {programs.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
            <p style={{ color: 'var(--brand-text)' }}>
              La colaboración institucional impulsa el voluntariado organizado y los programas de inmersión
              internacional, garantizando proyectos sostenibles en el tiempo.
            </p>
            <p className="font-semibold" style={{ color: 'var(--brand-text)' }}>
              👉 Si representas una institución, universidad u organización, tu contribución puede multiplicar el impacto
              de Kipepeo.
            </p>
            <a href="#form-voluntariado" className="btn-secondary inline-flex w-full justify-center mt-2">
              Colabora con tu institución
            </a>
          </div>

          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              🌻 Otras modalidades
            </p>
            <ul className="list-disc pl-5 space-y-2" style={{ color: 'var(--brand-text)' }}>
              {otherModalities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--brand-primary)' }}>
              💛 Por qué?
            </p>
            <p style={{ color: 'var(--brand-text)' }}>
              Colaborar con Kipepeo es unir fuerzas para transformar la educación y construir un futuro más justo. Juntos
              conectamos recursos, conocimientos y personas entre España y Tanzania para multiplicar un impacto positivo
              y duradero.
            </p>
          </div>
        </div>

        <form
          id="form-voluntariado"
          className="card space-y-4 shadow-xl border border-white/80"
          style={{ background: 'var(--brand-surface)' }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="institution" className="block text-sm font-semibold text-gray-700">
              Nombre de la institución u organización
            </label>
            <input
              id="institution"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="Universidad / ONG / Asociación"
              required
              value={institution}
              onChange={(event) => setInstitution(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700">
              Persona de contacto
            </label>
            <input
              id="contactPerson"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="Nombre y apellidos"
              required
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              id="contactEmail"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="nombre@institucion.com"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contactPhone" className="block text-sm font-semibold text-gray-700">
              Teléfono
            </label>
            <input
              id="contactPhone"
              className="w-full border rounded-xl p-3 mt-1"
              placeholder="+34 600 000 000"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-semibold text-gray-700">
              Área de interés
            </label>
            <select
              id="interest"
              className="w-full border rounded-xl p-3 mt-1"
              value={area}
              onChange={(event) => setArea(event.target.value)}
            >
              <option value="educacion">Educación</option>
              <option value="comunidad">Desarrollo comunitario</option>
              <option value="investigacion">Investigación aplicada</option>
              <option value="talleres">Talleres y formación</option>
              <option value="cultura">Intercambios culturales</option>
            </select>
          </div>
          <div>
            <label htmlFor="modality" className="block text-sm font-semibold text-gray-700">
              Modalidad de colaboración
            </label>
            <select
              id="modality"
              className="w-full border rounded-xl p-3 mt-1"
              value={modality}
              onChange={(event) => setModality(event.target.value as 'remoto' | 'terreno' | 'institucional')}
            >
              <option value="remoto">Voluntariado remoto</option>
              <option value="terreno">En terreno (Tanzania)</option>
              <option value="institucional">Colaboración institucional</option>
            </select>
          </div>
          <div>
            <label htmlFor="proposal" className="block text-sm font-semibold text-gray-700">
              Comentario o propuesta
            </label>
            <textarea
              id="proposal"
              className="w-full border rounded-xl p-3 mt-1"
              rows={4}
              placeholder="Describe la iniciativa"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          {feedback && <p className="text-sm text-emerald-600">{feedback}</p>}
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <button className="btn-primary w-full" type="submit" disabled={submitting}>
            {submitting ? 'Enviando…' : 'Enviar propuesta'}
          </button>
        </form>
      </div>
    </section>
  );
}
