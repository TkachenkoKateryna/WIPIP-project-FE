import { Box, Typography } from '@mui/material';
import Page from '../../components/containers/Page';

import { ReactComponent as ReactError } from '../../assets/images/404-error.svg';

const NotFoundPage = () => {
	return (
		<Page title='Not-found'>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				height='100%'
			>
				<ReactError />
				<Typography variant='h2' textAlign='center' margin='40px 0 10px'>
					Oops, This Page Could Not Be Found.
				</Typography>
				<Typography>
					The page you are looking for might have been removed, had its name
					changed, or is temporarily unavailable.
				</Typography>
			</Box>
		</Page>
	);
};

export default NotFoundPage;
