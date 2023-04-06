import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { ReactComponent as ReactError } from '../../assets/images/something-wrong.svg';

export const ErrorFallback: FC = () => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100%'
		>
			<ReactError />
			<Typography variant='h2' textAlign='center' margin='40px 0 10px'>
				Oops, Something Went Wrong.
			</Typography>
			<Typography>
				The page you are looking for is temporarily unavailable.
			</Typography>
		</Box>
	);
};
