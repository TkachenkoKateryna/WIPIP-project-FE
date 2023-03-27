import { FC } from 'react';
import { CircularProgress, Box } from '@mui/material';

type Props = {
	height?: string;
};

const Loader: FC<Props> = ({ height = 'calc(100vh - 70px)' }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: { height },
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Loader;
