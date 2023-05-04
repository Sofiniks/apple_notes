import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import React from "react";

export function PrivateRoute({ children } : {children: React.ReactNode}) {
	const location = useLocation();

	const { user } = useAuth();
	if (user === null) {
		return <Navigate to='/login' state={{ from: location.pathname }} replace />;
	}
	return <>{children}</>;
}
