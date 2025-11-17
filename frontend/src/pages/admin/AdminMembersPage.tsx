import { useCallback, useEffect, useMemo, useState } from 'react';
import RequireRole from '@/components/auth/RequireRole';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';

type MemberProfile = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contributionType?: string | null;
  paymentMethod?: string | null;
  status: string;
  createdAt: string;
};

export default function AdminMembersPage() {
  const { token } = useAuth();
  const [profiles, setProfiles] = useState<MemberProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [selected, setSelected] = useState<MemberProfile | null>(null);
  const [processing, setProcessing] = useState(false);

  const loadData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<MemberProfile[]>('/admin/member-profiles', { token });
      setProfiles(data);
    } catch (err: any) {
      setError(err?.message || 'No se pudo cargar la lista');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return profiles.filter((profile) => {
      const matchesStatus = filterStatus === 'ALL' || profile.status === filterStatus;
      const matchesQuery =
        !query ||
        profile.firstName.toLowerCase().includes(query) ||
        profile.lastName.toLowerCase().includes(query) ||
        profile.email.toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }, [profiles, search, filterStatus]);

  const handleDecision = async (approve: boolean, notes?: string) => {
    if (!token || !selected) return;
    setProcessing(true);
    try {
      await apiFetch('/admin/decide', {
        method: 'POST',
        body: JSON.stringify({ entityType: 'member', entityId: selected.id, approve, notes }),
        token,
      });
      setSelected(null);
      loadData();
    } catch (err: any) {
      alert(err?.message || 'No se pudo actualizar la solicitud');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <RequireRole roles={['ADMIN']}>
      <div className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold">Socios/as</h2>
          <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
            Consulta las solicitudes y revisa su estado de aportación.
          </p>
        </header>
        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            placeholder="Buscar por nombre o email"
            className="flex-1 min-w-[220px] border rounded-xl p-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border rounded-xl p-3"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="ALL">Todos</option>
            <option value="PENDING">Pendientes</option>
            <option value="APPROVED">Aprobados</option>
            <option value="REJECTED">Denegados</option>
          </select>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {loading ? (
          <p>Cargando perfiles…</p>
        ) : (
          <div className="overflow-x-auto border border-white/70 rounded-2xl shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-white/80">
                <tr>
                  <th className="text-left px-4 py-2">Nombre</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Cuota</th>
                  <th className="text-left px-4 py-2">Método pago</th>
                  <th className="text-left px-4 py-2">Estado</th>
                  <th className="text-left px-4 py-2">Alta</th>
                  <th className="text-left px-4 py-2" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((profile) => (
                  <tr key={profile.id} className="odd:bg-white/50">
                    <td className="px-4 py-3 font-semibold">
                      <button type="button" className="text-[color:var(--brand-primary)]" onClick={() => setSelected(profile)}>
                        {profile.firstName} {profile.lastName}
                      </button>
                    </td>
                    <td className="px-4 py-3">{profile.email}</td>
                    <td className="px-4 py-3">{profile.contributionType || '—'}</td>
                    <td className="px-4 py-3">{profile.paymentMethod || '—'}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs uppercase tracking-[0.2em]" style={{ background: 'var(--brand-secondary)', color: 'var(--brand-primary)' }}>
                        {profile.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{new Date(profile.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="px-3 py-2 rounded-full text-xs font-semibold bg-white border border-white/70 shadow"
                        onClick={() => setSelected(profile)}
                      >
                        Gestionar
                      </button>
                    </td>
                  </tr>
                ))}
                {!filtered.length && (
                  <tr>
                    <td className="px-4 py-4 text-center text-[color:var(--brand-muted)]" colSpan={7}>
                      No hay registros con esos criterios.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {selected && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[90]" onClick={() => setSelected(null)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
              <header className="space-y-1">
                <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-secondary)' }}>
                  Socio/a
                </p>
                <h3 className="text-2xl font-semibold">
                  {selected.firstName} {selected.lastName}
                </h3>
                <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
                  {selected.email}
                </p>
              </header>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Cuota:</strong> {selected.contributionType || '—'}
                </p>
                <p>
                  <strong>Método pago:</strong> {selected.paymentMethod || '—'}
                </p>
                <p>
                  <strong>Estado actual:</strong> {selected.status}
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <button
                  type="button"
                  className="flex-1 px-4 py-3 rounded-full bg-emerald-500 text-white font-semibold"
                  disabled={processing}
                  onClick={() => handleDecision(true)}
                >
                  Aprobar
                </button>
                <button
                  type="button"
                  className="flex-1 px-4 py-3 rounded-full bg-rose-500 text-white font-semibold"
                  disabled={processing}
                  onClick={() => {
                    const reason = window.prompt('Motivo de la denegación (opcional):') || undefined;
                    handleDecision(false, reason);
                  }}
                >
                  Denegar
                </button>
              </div>
              <button type="button" className="w-full text-sm text-[color:var(--brand-muted)]" onClick={() => setSelected(null)}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </RequireRole>
  );
}
