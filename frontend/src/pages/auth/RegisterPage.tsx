import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const ALLOWED_ROLES = ['ADMIN', 'MEMBER', 'VOLUNTEER', 'DONOR', 'TRAVELER'] as const;
type AllowedRole = (typeof ALLOWED_ROLES)[number];

export default function RegisterPage({ meta }: { meta?: any }) {
  const { completeRegistration, isLoading, user } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token') || '';
  const invitedRole = searchParams.get('role');
  const invitedEmail = searchParams.get('email') || '';
  const normalizedRole = invitedRole && ALLOWED_ROLES.includes(invitedRole as AllowedRole) ? (invitedRole as AllowedRole) : null;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (!invitedEmail || !normalizedRole) {
      setError('Necesitas un enlace de invitación válido.');
    }
  }, [invitedEmail, normalizedRole]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!invitedEmail || !normalizedRole) return;
    setSubmitting(true);
    setError(null);
    try {
      await completeRegistration({
        token: token || undefined,
        email: invitedEmail,
        role: normalizedRole,
        firstName,
        lastName,
        password,
      });
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setError(err?.message || 'No pudimos completar el registro');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section max-w-xl">
      <div className="card space-y-6">
        <header className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">Invitación</p>
          <h1 className="text-3xl font-semibold">{meta?.h1 || 'Completa tu registro'}</h1>
          {normalizedRole && <p className="text-sm text-[color:var(--brand-muted)]">Rol asignado: {normalizedRole}</p>}
        </header>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--brand-muted)]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="w-full border rounded-xl p-3 mt-1 bg-gray-50"
              value={invitedEmail}
              readOnly
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-[color:var(--brand-muted)]" htmlFor="firstName">
                Nombre
              </label>
              <input
                id="firstName"
                required
                className="w-full border rounded-xl p-3 mt-1"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--brand-muted)]" htmlFor="lastName">
                Apellidos
              </label>
              <input
                id="lastName"
                required
                className="w-full border rounded-xl p-3 mt-1"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--brand-muted)]" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full border rounded-xl p-3 mt-1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="text-xs text-[color:var(--brand-muted)] mt-1">Mínimo 8 caracteres.</p>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="btn-primary w-full" type="submit" disabled={submitting || !invitedEmail || !normalizedRole}>
            {submitting ? 'Creando cuenta…' : 'Crear cuenta'}
          </button>
        </form>
        {(!invitedEmail || !normalizedRole) && (
          <p className="text-center text-sm text-[color:var(--brand-muted)]">
            ¿Sin invitación? <Link to="/contacto" className="text-[color:var(--brand-primary)]">Contacta con el equipo</Link>
          </p>
        )}
      </div>
    </section>
  );
}
