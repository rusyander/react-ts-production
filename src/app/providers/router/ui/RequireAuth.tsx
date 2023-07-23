import { UserRole, getUserAuthData, getUserRole } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRole = useSelector(getUserRole);

  const hasRequireRole = useMemo(() => {
    if (!roles) return true;

    return roles.some((required) => {
      console.log('required', required);

      const hasRole = userRole?.includes(required);
      return hasRole;
    });
  }, [roles, userRole]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequireRole) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
};
