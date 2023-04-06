import { Logout } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button, IconButton, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../components/shared/Logo';

import { logoutThunk } from '../../store/auth/auth.actions';
import { getUser } from '../../store/auth/auth.selectors';
import { useDispatch, useSelector } from '../../store/store';

const Header: FC = () => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Root isAuthorized={!!user.name}>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			{user.name ? (
				<Box display='flex' alignItems='center'>
					<Typography height={'fit-content'}>{user.name}</Typography>
					<IconButton>
						<PersonOutlineIcon fontSize='medium' />
					</IconButton>
					<IconButton disableRipple>
						<Logout
							fontSize='medium'
							onClick={async () => {
								await dispatch(logoutThunk());
								navigate('/');
							}}
						/>
					</IconButton>
				</Box>
			) : (
				<Button component={Link} to='/auth/login' variant='contained'>
					Login
				</Button>
			)}
		</Root>
	);
};

export default Header;

const Root = styled('div')<{ isAuthorized: boolean }>(
	({ theme, isAuthorized }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: 70,
		boxSizing: 'border-box',
		paddingRight: theme.spacing(2.5),
		background: theme.palette.background[isAuthorized ? 'default' : 'paper'],
	})
);

const LogoWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: 200,
	minWidth: 200,
	height: '100%',
	background: theme.palette.background.paper,
}));
