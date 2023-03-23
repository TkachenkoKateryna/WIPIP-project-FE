import { Login, Logout } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { IconButton, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ReactLogo } from '../../assets/images/logo.svg';
import { logoutThunk } from '../../store/auth/auth.actions';
import { getUser } from '../../store/auth/auth.selectors';
import { useDispatch, useSelector } from '../../store/store';

const Header: FC = () => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Root>
			<LogoWrapper>
				<ReactLogo />
			</LogoWrapper>

			{user.name ? (
				<InfoWrapper>
					<Typography variant='subtitle2' height={'fit-content'}>
						{user.name}
					</Typography>
					<IconButton>
						<PersonOutlineIcon fontSize='large' />
					</IconButton>
					<IconButton>
						<Logout
							fontSize='large'
							onClick={async () => {
								await dispatch(logoutThunk());
								navigate('/');
							}}
						/>
					</IconButton>
				</InfoWrapper>
			) : (
				<IconButton>
					<Login fontSize='large' />
				</IconButton>
			)}
		</Root>
	);
};

export default Header;

const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100% ',
	height: 70,
	padding: theme.spacing(),
	boxSizing: 'border-box',
}));

const InfoWrapper = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
}));

const LogoWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	boxSizing: 'border-box',
	padding: theme.spacing(),
}));
