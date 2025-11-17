import { Outlet, useNavigate } from 'react-router-dom';

const sections = [
  { to: '/acerca-de/origen', label: 'Origen', detail: 'Cómo nació la mariposa Kipepeo.' },
  { to: '/acerca-de/quienes-somos', label: 'Quiénes somos', detail: 'Equipo que hace posible el sueño.' },
  { to: '/acerca-de/mision', label: 'Misión', detail: 'La llave para romper ciclos de pobreza.' },
  { to: '/acerca-de/objetivos', label: 'Objetivos', detail: 'Desarrollo comunitario alineado a los ODS.' },
  { to: '/acerca-de/transparencia', label: 'Transparencia', detail: 'Documentos e informes públicos.' },
  { to: '/acerca-de/donde-estamos', label: 'Dónde estamos', detail: 'Mto Wa Mbu (Tanzania) + base en España.' },
];

export default function AboutIndex({ meta }: { meta?: any }) {
  const navigate = useNavigate();
  return (
    <section className="section space-y-8">
      <div className="text-center space-y-4">
        <p className="uppercase text-sm tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
          Acerca de Kipepeo
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{meta?.h1 || 'Nuestra historia'}</h1>
        <p className="max-w-3xl mx-auto" style={{ color: 'var(--brand-muted)' }}>
          Somos un movimiento que nació del corazón de Paulo y que hoy acompaña a cientos de niñas y niños en Manyara. Explora las secciones para conocer nuestro origen, equipo, misión y compromiso.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((card) => (
          <button
            key={card.to}
            type="button"
            onClick={() => navigate(card.to)}
            className="card text-left hover:-translate-y-1 transition-transform"
          >
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
              {card.label}
            </p>
            <p className="text-base font-medium">{card.detail}</p>
          </button>
        ))}
      </div>

      <Outlet />
    </section>
  );
}
