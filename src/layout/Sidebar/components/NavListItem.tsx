import { ListItem, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavLink {
	icon: ReactNode;
	text: string;
	to: string;
}

const NavListItem: FC<NavLink> = ({ icon, text, to }) => {
	return (
		<Root>
			<Link to={to}>
				<ListItem>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText secondary={text} />
				</ListItem>
			</Link>
		</Root>
	);
};

export default NavListItem;

const Root = styled('div')(({ theme }) => ({
	'&:hover': {
		background: theme.palette.primary[100],
		borderRadius: '10px',
	},
}));
