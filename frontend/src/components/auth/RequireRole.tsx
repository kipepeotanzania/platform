import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

type Props = {
  roles: string[];
  children: React.ReactNode;
};

export default function RequireRole({ roles, children }: Props) {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="section text-center">Cargando…</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  if (!roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
  }
  return <>{children}</>;
}
