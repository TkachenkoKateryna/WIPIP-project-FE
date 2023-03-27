import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { ReactComponent as ReactLogo } from '../../assets/images/logo.svg';

const Logo = () => {
	return (
		<Box
			component={Link}
			to='/'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<ReactLogo />
		</Box>
	);
};

export default Logo;
