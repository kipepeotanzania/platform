import RequireAuth from '@/components/auth/RequireAuth';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

const ROLE_SHORTCUTS: Record<string, { label: string; to: string; description: string }[]> = {
  ADMIN: [
    { label: 'Ver voluntarios', to: '/admin/voluntarios', description: 'Solicitudes y seguimiento' },
    { label: 'Ver socios', to: '/admin/socios', description: 'Altas y aportaciones' },
    { label: 'Ver viajeros', to: '/admin/viajeros', description: 'Viajes confirmados' },
    { label: 'Ver donaciones', to: '/admin/donaciones', description: 'Historial donantes' },
    { label: 'Consultas', to: '/admin/consultas', description: 'Mensajes de contacto' },
    { label: 'Personas', to: '/admin/personas', description: 'Directorio completo' },
  ],
  VOLUNTEER: [
    { label: 'Mi perfil', to: '/perfil', description: 'Actualiza tus datos' },
    { label: 'Documentos', to: '#', description: 'Entrega de contratos' },
  ],
  MEMBER: [
    { label: 'Mi perfil', to: '/perfil', description: 'Actualiza tus datos' },
    { label: 'Estado de aportación', to: '#', description: 'Consultar cuota' },
  ],
  TRAVELER: [
    { label: 'Mi perfil', to: '/perfil', description: 'Datos de viaje' },
    { label: 'Itinerario', to: '/viaja', description: 'Plan de ruta' },
  ],
  DONOR: [
    { label: 'Mi perfil', to: '/perfil', description: 'Actualizar información' },
    { label: 'Donaciones', to: '/colabora/dona-ahora', description: 'Haz una nueva aportación' },
  ],
};

export default function DashboardPage() {
  const { user } = useAuth();
  const shortcuts = ROLE_SHORTCUTS[user?.role || ''] || [{ label: 'Mi perfil', to: '/perfil', description: 'Actualiza tus datos' }];
  const isAdmin = user?.role === 'ADMIN';

  return (
    <RequireAuth>
      <section className="section space-y-6">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            Dashboard
          </p>
          <h1 className="text-3xl font-semibold">Hola, {user?.firstName}</h1>
          <p style={{ color: 'var(--brand-muted)' }}>Esto es lo más relevante para tu rol dentro de Kipepeo.</p>
        </header>
        {!isAdmin && (
          <div className="rounded-[32px] bg-white shadow-lg border border-white/60 p-6 space-y-2">
            <h2 className="text-2xl font-semibold">Hola {user?.firstName || 'Kipepeo friend'} 👋</h2>
            <p style={{ color: 'var(--brand-text)' }}>
              Estamos construyendo una plataforma que te dará una experiencia increíble. Agradecemos tu paciencia mientras terminamos los
              módulos personalizados. Mientras tanto, puedes mantener tus datos al día y seguir conectado con la comunidad.
            </p>
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shortcuts.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-2xl border border-white/70 bg-white shadow-sm p-4 hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-lg font-semibold" style={{ color: 'var(--brand-primary)' }}>
                {item.label}
              </h3>
              <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </RequireAuth>
  );
}
