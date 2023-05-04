import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface PrivateRouteProps {
  children: React.ReactNode | any;
}

export function PrivateRoute({children}: PrivateRouteProps) {
    const location = useLocation();

    const {user} = useAuth();
    if(user === null) {
        return <Navigate to="/login" state={{from: location.pathname}} replace/>
    }
    return children
}