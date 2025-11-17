import RequireRole from '@/components/auth/RequireRole';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const shortcuts = [
  { label: 'Ver voluntarios', to: '/admin/voluntarios', description: 'Solicitudes y aprobaciones' },
  { label: 'Ver socios', to: '/admin/socios', description: 'Altas y renovaciones' },
  { label: 'Ver donaciones', to: '/admin/donaciones', description: 'Historial y totales' },
  { label: 'Ver viajeros', to: '/admin/viajeros', description: 'Experiencias confirmadas' },
  { label: 'Personas', to: '/admin/personas', description: 'Directorio completo' },
];

export default function AdminHome() {
  const { user } = useAuth();
  return (
    <RequireRole roles={['ADMIN']}>
      <section className="section space-y-8">
        <header className="space-y-2">
          <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            Hola, {user?.firstName}
          </p>
          <h1 className="text-3xl font-semibold">Tu panel administrativo</h1>
          <p style={{ color: 'var(--brand-muted)' }}>
            Gestiona las solicitudes y revisa la actividad reciente del ecosistema Kipepeo.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shortcuts.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="rounded-2xl border border-white/70 bg-white shadow-sm p-5 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-lg font-semibold" style={{ color: 'var(--brand-primary)' }}>
                {card.label}
              </h3>
              <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </RequireRole>
  );
}
