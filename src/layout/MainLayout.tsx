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
			{isAuthenticated && <Sidebar />}
			<Main>
				<Outlet />
			</Main>
		</Root>
	);
};

export default MainLayout;

const Root = styled('div')({
	height: '100%',
	minHeight: '100vh',
	display: 'flex',
	flexWrap: 'wrap',
	alignContent: 'flex-start',
});

const Main = styled('main')(() => ({
	flex: 1,
	minHeight: 'calc(100vh - 70px)',
}));
