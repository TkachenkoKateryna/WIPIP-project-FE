import { styled } from '@mui/material';
import List from '@mui/material/List';
import { FC } from 'react';
import { navLinks } from '../../constants/navLinks';
import NavListItem from './components/NavListItem';

const Sidebar: FC = () => {
	return (
		<Root>
			<List>
				{navLinks.map((link) => (
					<NavListItem to={link.to} text={link.title} icon={link.icon} />
				))}
			</List>
		</Root>
	);
};

export default Sidebar;

const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	minHeight: 'calc(100vh - 70px)',
	width: 200,
	minWidth: 200,
	background: theme.palette.background.paper,
}));
