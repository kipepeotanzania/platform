import { NavLink, Outlet } from 'react-router-dom';
import RequireRole from '@/components/auth/RequireRole';

const links = [
  { to: '/admin/voluntarios', label: 'Voluntarios' },
  { to: '/admin/donaciones', label: 'Donaciones' },
  { to: '/admin/socios', label: 'Socios' },
  { to: '/admin/viajeros', label: 'Viajeros' },
  { to: '/admin/consultas', label: 'Consultas' },
  { to: '/admin/personas', label: 'Personas' },
];

export default function AdminLayout() {
  return (
    <RequireRole roles={['ADMIN']}>
      <div className="min-h-[70vh] md:flex">
        <aside className="md:w-64 border-b md:border-b-0 md:border-r border-white/60 bg-white/70 p-4 space-y-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">Admin</p>
            <h1 className="text-xl font-semibold">Panel</h1>
          </div>
          <nav className="space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[color:var(--brand-secondary)]/30 text-[color:var(--brand-primary)]'
                      : 'text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <section className="flex-1 p-4 md:p-8">
          <Outlet />
        </section>
      </div>
    </RequireRole>
  );
}
