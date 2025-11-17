import { FormEvent, useEffect, useMemo, useState } from 'react';
import RequireAuth from '@/components/auth/RequireAuth';
import { useAuth } from '@/hooks/useAuth';
import { apiFetch } from '@/lib/api';

type ProfileResponse = {
  ok: boolean;
  user: {
    id: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string | null;
    bio?: string | null;
    interests?: string | null;
  };
};

export default function ProfilePage({ meta }: { meta?: any }) {
  const { user, token, refreshUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    avatarUrl: '',
    bio: '',
    interests: '',
  });

  useEffect(() => {
    let active = true;
    async function loadProfile() {
      if (!token) return;
      try {
        const response = await apiFetch<ProfileResponse>('/profile/me', { token });
        if (!active) return;
        const next = {
          firstName: response.user.firstName || '',
          lastName: response.user.lastName || '',
          email: response.user.email,
          role: response.user.role,
          avatarUrl: response.user.avatarUrl || '',
          bio: response.user.bio || '',
          interests: response.user.interests || '',
        };
        setForm(next);
        refreshUser({
          id: response.user.id,
          email: response.user.email,
          role: response.user.role as any,
          firstName: response.user.firstName,
          lastName: response.user.lastName,
          avatarUrl: response.user.avatarUrl,
          bio: response.user.bio,
          interests: response.user.interests,
        });
      } catch (err: any) {
        if (!active) return;
        setError(err?.message || 'No pudimos cargar tu perfil.');
      } finally {
        if (active) setLoading(false);
      }
    }
    loadProfile();
    return () => {
      active = false;
    };
  }, [token, refreshUser]);

  const initials = useMemo(() => {
    const first = form.firstName?.[0] ?? '';
    const last = form.lastName?.[0] ?? '';
    return (first + last).toUpperCase() || '🙂';
  }, [form.firstName, form.lastName]);

  const handleChange = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!token) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        avatarUrl: form.avatarUrl.trim(),
        bio: form.bio,
        interests: form.interests,
      };
      const response = await apiFetch<ProfileResponse>('/profile', {
        method: 'PUT',
        token,
        body: JSON.stringify(payload),
      });
      setSuccess('Cambios guardados.');
      setForm((prev) => ({
        ...prev,
        avatarUrl: response.user.avatarUrl || '',
        bio: response.user.bio || '',
        interests: response.user.interests || '',
      }));
      refreshUser({
        id: response.user.id,
        email: response.user.email,
        role: response.user.role as any,
        firstName: response.user.firstName,
        lastName: response.user.lastName,
        avatarUrl: response.user.avatarUrl,
        bio: response.user.bio,
        interests: response.user.interests,
      });
    } catch (err: any) {
      setError(err?.message || 'No pudimos guardar los cambios.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <RequireAuth>
      <section className="section space-y-8">
        <header className="space-y-2 text-center md:text-left">
          <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-primary)' }}>
            {meta?.breadcrumb || 'Perfil'}
          </p>
          <h1 className="text-3xl font-semibold">{meta?.h1 || 'Tu perfil'}</h1>
          <p style={{ color: 'var(--brand-muted)' }}>Actualiza tu información personal y preferencias.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-[280px,1fr] items-start">
          <div className="card space-y-4 text-center">
            <div className="mx-auto h-32 w-32 rounded-full bg-[color:var(--brand-secondary)]/30 flex items-center justify-center overflow-hidden shadow-inner">
              {form.avatarUrl ? (
                <img src={form.avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
              ) : (
                <span className="text-3xl font-semibold" style={{ color: 'var(--brand-primary)' }}>
                  {initials}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700" htmlFor="avatarUrl">
                Foto (URL)
              </label>
              <input
                id="avatarUrl"
                className="w-full border rounded-xl p-3"
                placeholder="https://..."
                value={form.avatarUrl}
                onChange={handleChange('avatarUrl')}
              />
              <button
                type="button"
                className="text-xs text-[color:var(--brand-primary)] underline"
                onClick={() => setForm((prev) => ({ ...prev, avatarUrl: '' }))}
              >
                Reset a icono por defecto
              </button>
            </div>
            <div className="text-sm space-y-1">
              <p className="font-semibold">{form.firstName && form.lastName ? `${form.firstName} ${form.lastName}` : user?.firstName}</p>
              <p style={{ color: 'var(--brand-muted)' }}>{form.email}</p>
              <p className="uppercase text-xs tracking-[0.3em]" style={{ color: 'var(--brand-secondary)' }}>
                Rol: {form.role || user?.role}
              </p>
            </div>
          </div>
          <form className="card space-y-5 shadow-lg border border-white/70" onSubmit={handleSubmit}>
            {loading ? (
              <p>Cargando perfil…</p>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700" htmlFor="firstName">
                      Nombre
                    </label>
                    <input
                      id="firstName"
                      required
                      className="w-full border rounded-xl p-3 mt-1"
                      value={form.firstName}
                      onChange={handleChange('firstName')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700" htmlFor="lastName">
                      Apellidos
                    </label>
                    <input
                      id="lastName"
                      required
                      className="w-full border rounded-xl p-3 mt-1"
                      value={form.lastName}
                      onChange={handleChange('lastName')}
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
                      Email
                    </label>
                    <input id="email" className="w-full border rounded-xl p-3 mt-1 bg-gray-50" value={form.email} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700" htmlFor="role">
                      Rol
                    </label>
                    <input id="role" className="w-full border rounded-xl p-3 mt-1 bg-gray-50" value={form.role} readOnly />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700" htmlFor="bio">
                    Breve descripción
                  </label>
                  <textarea
                    id="bio"
                    className="w-full border rounded-xl p-3 mt-1"
                    rows={4}
                    placeholder="Cuenta algo sobre ti y tu vínculo con Kipepeo."
                    value={form.bio}
                    onChange={handleChange('bio')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700" htmlFor="interests">
                    Intereses
                  </label>
                  <textarea
                    id="interests"
                    className="w-full border rounded-xl p-3 mt-1"
                    rows={3}
                    placeholder="Educación, voluntariado, viajes responsables..."
                    value={form.interests}
                    onChange={handleChange('interests')}
                  />
                </div>
                {error && <p className="text-sm text-rose-600">{error}</p>}
                {success && <p className="text-sm text-emerald-600">{success}</p>}
                <button className="btn-primary" type="submit" disabled={saving}>
                  {saving ? 'Guardando…' : 'Guardar cambios'}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </RequireAuth>
  );
}
