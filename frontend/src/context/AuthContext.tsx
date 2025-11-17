import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { apiFetch } from '@/lib/api';

type Role = 'ADMIN' | 'MEMBER' | 'VOLUNTEER' | 'DONOR' | 'TRAVELER';

type AuthUser = {
  id: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
  avatarUrl?: string | null;
  bio?: string | null;
  interests?: string | null;
};

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = {
  token?: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
  password: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
  completeRegistration: (payload: RegisterPayload) => Promise<void>;
  refreshUser: (payload: AuthUser) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = 'kipepeo.session';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const session = JSON.parse(raw);
        setUser(session.user ?? null);
        setToken(session.token ?? null);
      }
    } catch (error) {
      console.warn('Unable to load session', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const persistSession = useCallback((nextToken: string | null, nextUser: AuthUser | null) => {
    setToken(nextToken);
    setUser(nextUser);
    if (nextToken && nextUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: nextToken, user: nextUser }));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const login = useCallback(async ({ email, password }: LoginPayload) => {
    const response = await apiFetch<{ token: string; user: AuthUser }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    persistSession(response.token, response.user);
  }, [persistSession]);

  const logout = useCallback(() => {
    persistSession(null, null);
  }, [persistSession]);

  const completeRegistration = useCallback(async (payload: RegisterPayload) => {
    const response = await apiFetch<{ token: string; user: AuthUser }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    persistSession(response.token, response.user);
  }, [persistSession]);

  const refreshUser = useCallback(
    (nextUser: AuthUser) => {
      if (!token) return;
      persistSession(token, nextUser);
    },
    [token, persistSession],
  );

  const value = useMemo(
    () => ({ user, token, isLoading, login, logout, completeRegistration, refreshUser }),
    [user, token, isLoading, login, logout, completeRegistration, refreshUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return ctx;
}
