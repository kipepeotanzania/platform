import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import RequireRole from '@/components/auth/RequireRole';

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
};

export default function AdminPeoplePage() {
  const { token } = useAuth();
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const data = await apiFetch<Person[]>('/admin/people', { token });
        if (mounted) {
          setPeople(data);
        }
      } catch (err: any) {
        setError(err?.message || 'No se pudo cargar el directorio');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (token) {
      load();
    }
    return () => {
      mounted = false;
    };
  }, [token]);

  return (
    <RequireRole roles={['ADMIN']}>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Personas</h2>
          <p className="text-sm text-[color:var(--brand-muted)]">Directorio general por rol.</p>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {loading ? (
          <p>Cargando listado…</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/70">
            <table className="min-w-full text-sm">
              <thead className="bg-white/70">
                <tr>
                  <th className="text-left px-4 py-2">Nombre</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Rol</th>
                  <th className="text-left px-4 py-2">Creado</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => (
                  <tr key={person.id} className="odd:bg-white/40">
                    <td className="px-4 py-2">
                      <button
                        type="button"
                        className="text-[color:var(--brand-primary)] font-semibold"
                        onClick={() => navigate(`/admin/personas/${person.id}`)}
                      >
                        {person.firstName} {person.lastName}
                      </button>
                    </td>
                    <td className="px-4 py-2">{person.email}</td>
                    <td className="px-4 py-2 uppercase text-xs tracking-[0.2em]">{person.role}</td>
                    <td className="px-4 py-2">{new Date(person.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
                {!people.length && (
                  <tr>
                    <td className="px-4 py-4 text-center text-[color:var(--brand-muted)]" colSpan={4}>
                      No hay personas registradas todavía.
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
