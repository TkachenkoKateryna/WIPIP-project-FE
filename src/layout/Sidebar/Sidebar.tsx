import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import NavListItem from './components/NavListItem';

const Sidebar = () => {
	return (
		<Box
			sx={{
				width: 180,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: 1,
			}}
		>
			<List>
				<NavListItem text={'Project'} icon={<InboxIcon />} />
				<NavListItem text={'Project'} icon={<InboxIcon />} />
			</List>
		</Box>
	);
};

export default Sidebar;
