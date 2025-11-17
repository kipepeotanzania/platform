import { Link, Outlet } from 'react-router-dom';
import SectionPage from '@/pages/common/SectionPage';

const options = [
  { title: 'Hazte socio/a', description: 'Aportaciones recurrentes desde 30€ al año.', to: '/colabora/ser-socio' },
  { title: 'Dona ahora', description: 'Transferencias puntuales o campañas específicas.', to: '/colabora/dona-ahora' },
  { title: 'Voluntariado', description: 'Universidades y organizaciones que co-diseñan proyectos.', to: '/colabora/voluntariado' },
];

export default function CollaborateIndex({ meta }: { meta?: any }) {
  return (
    <SectionPage meta={meta} hero="/images/gallery-1.jpg">
      <p style={{ color: 'var(--brand-muted)' }}>
        Cada contribución financia becas, infraestructura y salarios dignos. Compartimos informes periódicos y encuentros
        virtuales para rendir cuentas con transparencia.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {options.map((option) => (
          <Link
            key={option.to}
            to={option.to}
            className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm hover:-translate-y-1 transition"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-2" style={{ color: 'var(--brand-primary)' }}>
              {meta?.breadcrumb || 'Colabora'}
            </p>
            <p className="text-lg font-semibold" style={{ color: 'var(--brand-text)' }}>
              {option.title}
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--brand-muted)' }}>
              {option.description}
            </p>
          </Link>
        ))}
      </div>
      <Outlet />
    </SectionPage>
  );
}
