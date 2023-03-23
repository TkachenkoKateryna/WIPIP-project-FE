import { PropsWithChildren, FC } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticatedUser } from '../../store/auth/auth.selectors';
import { useSelector } from '../../store/store';
import Path from '../paths';

const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
	const isAuthenticated = useSelector(isAuthenticatedUser);

	if (isAuthenticated) {
		return <Navigate to={Path.home} />;
	}

	return <>{children}</>;
};

export default GuestGuard;
