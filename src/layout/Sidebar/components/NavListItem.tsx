import { ReactNode, FC } from 'react';
import { ListItemButton, ListItemIcon, ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

interface NavLink {
	icon: ReactNode;
	text: string;
}

const NavListItem: FC<NavLink> = ({ icon, text }) => {
	return (
		<ListItem>
			<ListItemButton sx={{ padding: 0 }}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
};

export default NavListItem;
