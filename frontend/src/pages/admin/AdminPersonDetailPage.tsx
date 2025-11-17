import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RequireRole from '@/components/auth/RequireRole';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';

type PersonDetail = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  memberProfile?: any;
  volunteerApp?: any;
  travelerApp?: any;
  donations?: Array<{ id: string; amount: number; currency: string; project?: string | null; createdAt: string }>;
};

export default function AdminPersonDetailPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [person, setPerson] = useState<PersonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const data = await apiFetch<PersonDetail>(`/admin/users/${id}`, { token });
        if (mounted) {
          setPerson(data);
        }
      } catch (err: any) {
        setError(err?.message || 'No se pudo cargar la persona');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (token && id) {
      load();
    }
    return () => {
      mounted = false;
    };
  }, [token, id]);

  return (
    <RequireRole roles={['ADMIN']}>
      <div className="space-y-6">
        <Link to="/admin/personas" className="text-sm text-[color:var(--brand-primary)]">
          ← Personas
        </Link>
        {loading && <p>Cargando…</p>}
        {error && <p className="text-red-600">{error}</p>}
        {person && (
          <div className="space-y-6">
            <header className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-muted)]">Ficha</p>
              <h2 className="text-3xl font-semibold">
                {person.firstName} {person.lastName}
              </h2>
              <p className="text-sm text-[color:var(--brand-muted)]">{person.email} · Rol: {person.role}</p>
            </header>
            <section className="card space-y-2">
              <h3 className="text-lg font-semibold">Perfil de socio/a</h3>
              {person.memberProfile ? (
                <dl className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="font-semibold">Tipo de cuota</dt>
                    <dd>{person.memberProfile.contributionType || '—'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Método de pago</dt>
                    <dd>{person.memberProfile.paymentMethod || '—'}</dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="font-semibold">Mensaje</dt>
                    <dd>{person.memberProfile.message || '—'}</dd>
                  </div>
                </dl>
              ) : (
                <p className="text-sm text-[color:var(--brand-muted)]">Sin perfil de socio/a.</p>
              )}
            </section>
            <section className="card space-y-2">
              <h3 className="text-lg font-semibold">Solicitud de voluntariado</h3>
              {person.volunteerApp ? (
                <p className="text-sm">Área: {person.volunteerApp.area || 'No especificado'}</p>
              ) : (
                <p className="text-sm text-[color:var(--brand-muted)]">Sin solicitud.</p>
              )}
            </section>
            <section className="card space-y-2">
              <h3 className="text-lg font-semibold">Solicitud de viaje</h3>
              {person.travelerApp ? (
                <p className="text-sm">Fechas: {person.travelerApp.dates || 'No especificado'}</p>
              ) : (
                <p className="text-sm text-[color:var(--brand-muted)]">Sin solicitud.</p>
              )}
            </section>
            <section className="card space-y-2">
              <h3 className="text-lg font-semibold">Donaciones</h3>
              {person.donations?.length ? (
                <ul className="text-sm space-y-1">
                  {person.donations.map((donation) => (
                    <li key={donation.id} className="flex items-center justify-between">
                      <span>
                        {donation.amount.toFixed(2)} {donation.currency} · {donation.project || 'General'}
                      </span>
                      <span className="text-[color:var(--brand-muted)]">
                        {new Date(donation.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[color:var(--brand-muted)]">Sin donaciones registradas.</p>
              )}
            </section>
          </div>
        )}
      </div>
    </RequireRole>
  );
}
