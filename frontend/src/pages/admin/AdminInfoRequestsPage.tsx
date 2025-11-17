import { useCallback, useEffect, useMemo, useState } from 'react';
import RequireRole from '@/components/auth/RequireRole';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';

type InfoRequest = {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  status: 'PENDING' | 'RESPONDED';
  createdAt: string;
  respondedAt?: string | null;
  respondedBy?: { id: string; firstName: string; lastName: string; email: string } | null;
};

const STATUS_LABELS: Record<string, string> = {
  PENDING: 'Pendiente',
  RESPONDED: 'Respondida',
};

export default function AdminInfoRequestsPage() {
  const { token } = useAuth();
  const [requests, setRequests] = useState<InfoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PENDING' | 'RESPONDED'>('ALL');
  const [active, setActive] = useState<InfoRequest | null>(null);
  const [processing, setProcessing] = useState(false);

  const loadData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<InfoRequest[]>('/admin/info-requests', { token });
      setRequests(data);
    } catch (err: any) {
      setError(err?.message || 'No se pudieron cargar las solicitudes');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return requests.filter((req) => {
      const matchesStatus = statusFilter === 'ALL' || req.status === statusFilter;
      const matchesQuery =
        !query ||
        req.name.toLowerCase().includes(query) ||
        req.email.toLowerCase().includes(query) ||
        (req.subject ?? '').toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }, [requests, search, statusFilter]);

  const handleToggle = async (request: InfoRequest) => {
    if (!token) return;
    setProcessing(true);
    try {
      const nextStatus = request.status === 'RESPONDED' ? 'PENDING' : 'RESPONDED';
      await apiFetch(`/admin/info-requests/${request.id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: nextStatus }),
        token,
      });
      setActive(null);
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
          <h2 className="text-2xl font-semibold">Solicitudes de información</h2>
          <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
            CRM conectado al formulario de contacto. Marca cuando se atienda.
          </p>
        </header>

        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            className="flex-1 min-w-[220px] border rounded-xl p-3"
            placeholder="Buscar por nombre, email o asunto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="border rounded-xl p-3" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)}>
            <option value="ALL">Todos</option>
            <option value="PENDING">Pendientes</option>
            <option value="RESPONDED">Respondidas</option>
          </select>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {loading ? (
          <p>Cargando solicitudes…</p>
        ) : (
          <div className="overflow-x-auto border border-white/70 rounded-2xl shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-white/80">
                <tr>
                  <th className="text-left px-4 py-2">Nombre</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Asunto</th>
                  <th className="text-left px-4 py-2">Estado</th>
                  <th className="text-left px-4 py-2">Recibido</th>
                  <th className="text-left px-4 py-2" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((req) => (
                  <tr key={req.id} className="odd:bg-white/50">
                    <td className="px-4 py-3 font-semibold">{req.name}</td>
                    <td className="px-4 py-3">{req.email}</td>
                    <td className="px-4 py-3">{req.subject || '—'}</td>
                    <td className="px-4 py-3">
                      <span
                        className="px-2 py-1 rounded-full text-xs uppercase tracking-[0.2em]"
                        style={{
                          background: req.status === 'RESPONDED' ? 'rgba(34,197,94,.2)' : 'var(--brand-secondary)',
                          color: req.status === 'RESPONDED' ? '#15803d' : 'var(--brand-primary)',
                        }}
                      >
                        {STATUS_LABELS[req.status]}
                      </span>
                    </td>
                    <td className="px-4 py-3">{new Date(req.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="px-3 py-2 rounded-full text-xs font-semibold bg-white border border-white/70 shadow"
                        onClick={() => setActive(req)}
                      >
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}
                {!filtered.length && (
                  <tr>
                    <td className="px-4 py-4 text-center text-[color:var(--brand-muted)]" colSpan={6}>
                      No hay registros con esos criterios.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {active && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[90]" onClick={() => setActive(null)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
              <header className="space-y-1">
                <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-secondary)' }}>
                  Mensaje
                </p>
                <h3 className="text-2xl font-semibold">{active.subject || 'Sin asunto'}</h3>
                <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
                  {active.name} · {active.email}
                </p>
              </header>
              <p className="text-sm whitespace-pre-line" style={{ color: 'var(--brand-text)' }}>
                {active.message}
              </p>
              <div className="text-xs" style={{ color: 'var(--brand-muted)' }}>
                <p>Recibido: {new Date(active.createdAt).toLocaleString()}</p>
                {active.respondedAt && (
                  <p>
                    Respondido: {new Date(active.respondedAt).toLocaleString()} por{' '}
                    {active.respondedBy ? `${active.respondedBy.firstName} ${active.respondedBy.lastName}` : '—'}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <button
                  type="button"
                  className="flex-1 px-4 py-3 rounded-full bg-emerald-500 text-white font-semibold"
                  disabled={processing}
                  onClick={() => handleToggle(active)}
                >
                  {active.status === 'RESPONDED' ? 'Marcar como pendiente' : 'Marcar como respondida'}
                </button>
                <button
                  type="button"
                  className="flex-1 px-4 py-3 rounded-full border border-white/70"
                  onClick={() => setActive(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </RequireRole>
  );
}
