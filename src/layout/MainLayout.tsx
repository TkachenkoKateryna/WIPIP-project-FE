import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from '../store/store';
import { isAuthenticatedUser } from '../store/auth/auth.selectors';

const MainLayout: FC = () => {
	const isAuthenticated = useSelector(isAuthenticatedUser);

	return (
		<Root>
			<Header />
			<Main>
				{isAuthenticated && <Sidebar />}
				<Outlet />
			</Main>
		</Root>
	);
};

export default MainLayout;

const Root = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	minHeight: '100vh',
});

const Main = styled('main')(() => ({
	display: 'flex',
	flex: 1,
}));
