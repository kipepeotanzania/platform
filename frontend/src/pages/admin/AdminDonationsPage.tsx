import { useCallback, useEffect, useMemo, useState } from 'react';
import RequireRole from '@/components/auth/RequireRole';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';

type DonationSummary = {
  donorName: string;
  email?: string | null;
  totalAmount: number;
  count: number;
  lastDonation?: string | null;
};

export default function AdminDonationsPage() {
  const { token } = useAuth();
  const [donors, setDonors] = useState<DonationSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const loadData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<DonationSummary[]>('/admin/donations', { token });
      setDonors(data);
    } catch (err: any) {
      setError(err?.message || 'No se pudo cargar el historial');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return donors.filter((donor) => {
      if (!query) return true;
      return (
        donor.donorName.toLowerCase().includes(query) ||
        (donor.email ?? '').toLowerCase().includes(query)
      );
    });
  }, [donors, search]);

  const totalAmount = donors.reduce((sum, donor) => sum + donor.totalAmount, 0);

  return (
    <RequireRole roles={['ADMIN']}>
      <div className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold">Donaciones</h2>
          <p className="text-sm" style={{ color: 'var(--brand-muted)' }}>
            CRM consolidado con el total aportado por cada persona/contacto.
          </p>
          <p className="text-sm font-semibold">
            Total recaudado: {totalAmount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
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
          <button
            type="button"
            className="px-4 py-3 rounded-xl border border-white/70 bg-white shadow text-sm font-semibold"
            onClick={loadData}
          >
            Actualizar
          </button>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {loading ? (
          <p>Cargando donaciones…</p>
        ) : (
          <div className="overflow-x-auto border border-white/70 rounded-2xl shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-white/80">
                <tr>
                  <th className="text-left px-4 py-2">Donante</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Total aportado</th>
                  <th className="text-left px-4 py-2"># Donaciones</th>
                  <th className="text-left px-4 py-2">Última</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((donor) => (
                  <tr key={`${donor.email}-${donor.donorName}`} className="odd:bg-white/50">
                    <td className="px-4 py-3 font-semibold">{donor.donorName}</td>
                    <td className="px-4 py-3">{donor.email || '—'}</td>
                    <td className="px-4 py-3 font-semibold">
                      {donor.totalAmount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                    </td>
                    <td className="px-4 py-3">{donor.count}</td>
                    <td className="px-4 py-3">
                      {donor.lastDonation ? new Date(donor.lastDonation).toLocaleDateString() : '—'}
                    </td>
                  </tr>
                ))}
                {!filtered.length && (
                  <tr>
                    <td className="px-4 py-4 text-center text-[color:var(--brand-muted)]" colSpan={5}>
                      No hay registros con esos criterios.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </RequireRole>
  );
}
