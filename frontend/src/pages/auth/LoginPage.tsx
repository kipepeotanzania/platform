import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage({ meta }: { meta?: any }) {
  const { login, isLoading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [isLoading, user, navigate]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await login({ email, password });
      const from = (location.state as any)?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err?.message || 'No pudimos iniciar sesión');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section max-w-xl">
      <div className="card space-y-6">
        <header className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">Acceso</p>
          <h1 className="text-3xl font-semibold">{meta?.h1 || 'Inicia sesión'}</h1>
          <p className="text-[color:var(--brand-muted)]">Accede al área privada con tu email y contraseña.</p>
        </header>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--brand-muted)]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full border rounded-xl p-3 mt-1"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
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
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="btn-primary w-full" type="submit" disabled={submitting}>
            {submitting ? 'Entrando…' : 'Entrar'}
          </button>
        </form>
        <p className="text-center text-sm text-[color:var(--brand-muted)]">
          ¿Tienes una invitación?
          <Link to="/registro" className="text-[color:var(--brand-primary)] ml-1">
            Completa tu registro
          </Link>
        </p>
      </div>
    </section>
  );
}
