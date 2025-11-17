import { FormEvent, useState } from 'react';
import LocalImg from '@/components/media/LocalImg';
import { apiFetch } from '@/lib/api';

const highlights = [
  {
    title: 'Impacto real',
    copy: 'Cada experiencia financia aulas, internado y becas en Kipepeo. Viajas y multiplicas oportunidades.',
    image: '/images/travel-highlight-community.jpg',
  },
  {
    title: 'Exploración consciente',
    copy: 'Comunidad masái, cascadas escondidas y safaris responsables que respetan el entorno.',
    image: '/images/travel-highlight-explore.jpg',
  },
  {
    title: 'Voluntariado acompañado',
    copy: 'Sumas en clase, talleres o deporte con el equipo local guiando cada paso.',
    image: '/images/travel-highlight-volunteer.jpg',
  },
];

const itinerary = [
  {
    key: 'day1',
    label: 'Day 1',
    title: 'Departure',
    desc: 'Your adventure begins! Head to the airport and board your flight to Tanzania.',
    image: '/images/travel-itinerary-day1.jpg',
  },
  {
    key: 'day2',
    label: 'Day 2',
    title: 'Arrival in Tanzania',
    desc: 'Welcome to Mto wa Mbu! Settle into Jua Manyara Lodge, grab a local SIM, and rest up.',
    image: '/images/travel-itinerary-day2.jpg',
  },
  {
    key: 'day3',
    label: 'Day 3',
    title: 'Local Life & Cultural Tour',
    desc: 'Visit banana plantations, enjoy lunch at Mama Africa House, meet tribes, and try traditional banana beer.',
    image: '/images/travel-itinerary-day3.jpg',
  },
  {
    key: 'day4',
    label: 'Day 4',
    title: 'Tarangire National Park',
    desc: "Discover baobab forests filled with elephants, giraffes, lions, and more inside Tarangire.",
    image: '/images/travel-itinerary-day4.jpg',
  },
  {
    key: 'day5',
    label: 'Day 5',
    title: 'Volunteering & Waterfall Trek',
    desc: 'Support classes at Kilimamoja School, then hike to a hidden waterfall fed by Ngorongoro.',
    image: '/images/travel-itinerary-day5.jpg',
  },
  {
    key: 'day6',
    label: 'Day 6',
    title: 'Hadzabe Tribe & Lake Eyasi',
    desc: 'Spend the day with the Hadzabe, one of Tanzania’s last hunter-gatherer tribes, near Lake Eyasi.',
    image: '/images/travel-itinerary-day6.jpg',
  },
  {
    key: 'day7',
    label: 'Day 7',
    title: 'Volunteering & Creative Experience',
    desc: 'Return for sports day at school, then enjoy an afternoon painting session with local artists.',
    image: '/images/travel-itinerary-day7.jpg',
  },
  {
    key: 'days8to10',
    label: 'Days 8–10',
    title: 'Serengeti & Ngorongoro Safaris',
    desc: 'Embark on a 3-day safari across the Serengeti and the Ngorongoro Crater. Sleep under the stars and witness unforgettable wildlife.',
    image: '/images/travel-itinerary-days8-10.jpg',
  },
  {
    key: 'day11',
    label: 'Day 11',
    title: 'Farewell',
    desc: 'Say goodbye to students and staff, pack at the lodge, and get ready for your flight home.',
    image: '/images/travel-itinerary-day11.jpg',
  },
  {
    key: 'day12',
    label: 'Day 12',
    title: 'Arrival Back Home',
    desc: 'Arrive home filled with memories and stories from Tanzania.',
    image: '/images/travel-itinerary-day12.jpg',
  },
];

const notIncluded = ['Vuelos internacionales', 'Seguro médico y vacunas', 'Gastos personales', 'Excursiones fuera del itinerario'];

const funds = [
  'Nuevos dormitorios para niñas y niños del internado',
  'Biblioteca y aula de informática',
  'Programas de empoderamiento femenino y arte',
  'Cocina comunitaria y comedor escolar',
];

const gallery = ['/images/travel-gallery-1.jpg', '/images/travel-gallery-2.jpg', '/images/travel-gallery-3.jpg', '/images/travel-gallery-4.jpg'];

export default function TravelPage({ meta }: { meta?: any }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dates, setDates] = useState('');
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
      await apiFetch('/applications/traveler', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, phone, dates, message }),
      });
      setFeedback('Solicitud de viaje enviada. Te contactaremos por email.');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setDates('');
      setMessage('');
    } catch (err: any) {
      setError(err?.message || 'No pudimos registrar la solicitud.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="section relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-white shadow-xl">
        <div className="md:grid md:grid-cols-[1.05fr,0.95fr]">
          <div className="p-8 md:p-12 space-y-5">
            <p className="uppercase text-xs tracking-[0.4em] text-white/80">Viajes inmersivos</p>
            <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1 || 'Más que un safari: un viaje con propósito'}</h1>
            <p className="text-lg text-white/90">
              Recorre Tanzania acompañada de Kipepeo. Conectarás con la comunidad, vivirás la escuela por dentro y cada aporte financia
              educación de calidad.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#solicitud" className="btn-primary">
                Quiero vivirlo
              </a>
              <a href="#itinerario" className="btn-secondary bg-white/15 text-white border-white/40 hover:text-[color:var(--brand-primary)] hover:bg-white">
                Ver itinerario
              </a>
            </div>
          </div>
          <div className="relative min-h-[260px] md:min-h-[420px]">
            <LocalImg src="/images/travel-hero.jpg" alt="Viajes Kipepeo" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section space-y-6 bg-white rounded-[32px] shadow-lg text-center">
        <header className="space-y-2">
          <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            ¿Por qué es diferente?
          </p>
          <h2 className="text-2xl font-semibold">Explora, impacta, transforma</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((card) => (
            <article key={card.title} className="rounded-2xl bg-white/90 border border-white/60 shadow-sm overflow-hidden flex flex-col">
              <LocalImg src={card.image} alt={card.title} className="h-56 md:h-64 w-full object-cover" />
              <div className="p-5 space-y-2 flex-1">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--brand-primary)' }}>
                  {card.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
                  {card.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ITINERARY */}
      <section id="itinerario" className="section space-y-6">
        <header className="space-y-2 text-center">
          <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            Itinerario de referencia
          </p>
          <h2 className="text-2xl font-semibold">Sample Itinerary</h2>
          <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
            This is a sample itinerary and may change until the trip is confirmed.
          </p>
        </header>
        <div className="space-y-8">
          {itinerary.map((item, index) => (
            <article key={item.key} className="rounded-3xl p-5 shadow-lg border border-white/70 bg-white">
              <div className={`flex flex-col gap-4 md:flex-row md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative h-56 w-full md:w-60 rounded-2xl overflow-hidden shadow">
                  <LocalImg src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className={`space-y-3 flex-1 ${index % 2 === 1 ? 'text-right md:pr-6' : 'text-left md:pl-6'}`}>
                  <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--brand-secondary)' }}>
                    {item.label}
                  </p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--brand-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NOT INCLUDED & FUNDING */}
      <section className="section space-y-6">
        <header className="text-center space-y-1">
          <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            Transparencia total
          </p>
          <h2 className="text-2xl font-semibold">Qué incluye el viaje y a qué destinamos cada euro</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] p-6 border border-white/70 bg-white shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--brand-secondary)]/40 text-lg">
                —
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--brand-muted)' }}>
                  Detalles
                </p>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-primary)' }}>
                  Lo que no incluye
                </h3>
              </div>
            </div>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--brand-text)' }}>
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 block h-2.5 w-2.5 rounded-full" style={{ background: 'var(--brand-secondary)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article
            className="rounded-[28px] p-6 border border-white/70 shadow-lg space-y-4"
            style={{ background: 'var(--brand-gradient-soft)' }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 text-lg text-[color:var(--brand-primary)]">
                +
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
                  Impacto
                </p>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-text)' }}>
                  Lo que sí financias
                </h3>
              </div>
            </div>
            <p className="text-sm" style={{ color: 'var(--brand-text)' }}>
              El 100 % del beneficio neto se reinvierte en los programas educativos y sociales de Kipepeo.
            </p>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--brand-text)' }}>
              {funds.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 block h-2.5 w-2.5 rounded-full" style={{ background: 'var(--brand-primary)' }} />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section space-y-4">
        <header className="text-center space-y-2">
          <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            Así se vive
          </p>
          <h2 className="text-2xl font-semibold">Postales desde Tanzania</h2>
        </header>
        <div className="grid gap-4 md:grid-cols-4">
          {gallery.map((img, idx) => (
            <LocalImg
              key={img || idx}
              src={img}
              alt={`Viaje ${idx + 1}`}
              className="w-full object-cover rounded-2xl shadow aspect-[4/3]"
            />
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="solicitud" className="section rounded-[32px] bg-white shadow-xl space-y-6">
        <div className="space-y-2 text-center">
          <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            Queremos conocerte
          </p>
          <h2 className="text-2xl font-semibold">Solicita tu viaje inmersivo</h2>
          <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
            Cuéntanos quién eres y cuándo te gustaría viajar. Diseñaremos una propuesta a medida.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="travelFirstName" className="block text-sm font-semibold text-gray-700">
                Nombre
              </label>
              <input
                id="travelFirstName"
                className="w-full border rounded-xl p-3 mt-1"
                required
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="travelLastName" className="block text-sm font-semibold text-gray-700">
                Apellidos
              </label>
              <input
                id="travelLastName"
                className="w-full border rounded-xl p-3 mt-1"
                required
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="travelEmail" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                id="travelEmail"
                type="email"
                className="w-full border rounded-xl p-3 mt-1"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="travelPhone" className="block text-sm font-semibold text-gray-700">
                Teléfono
              </label>
              <input
                id="travelPhone"
                className="w-full border rounded-xl p-3 mt-1"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="travelDates" className="block text-sm font-semibold text-gray-700">
                Fechas aproximadas
              </label>
              <input
                id="travelDates"
                className="w-full border rounded-xl p-3 mt-1"
                placeholder="Ej. agosto 2025"
                value={dates}
                onChange={(event) => setDates(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="travelMessage" className="block text-sm font-semibold text-gray-700">
                Expectativas
              </label>
              <textarea
                id="travelMessage"
                className="w-full border rounded-xl p-3 mt-1"
                rows={3}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Cuéntanos qué te gustaría vivir o aportar"
              />
            </div>
          </div>
          {feedback && <p className="text-sm text-emerald-600">{feedback}</p>}
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <button className="btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Enviando…' : 'Enviar solicitud'}
          </button>
        </form>
      </section>
    </div>
  );
}
