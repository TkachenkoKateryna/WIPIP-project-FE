import { Button, Stack, styled, Typography } from '@mui/material';

import HeroImage from '../../../assets/images/hero.png';

const HeroSection = () => {
	return (
		<Root>
			<InfoWrapper spacing={2}>
				<Typography variant='h2'>
					The easiest way to manage team projects & tasks
				</Typography>
				<Typography>
					Take a tour of work management platform to see how you can do more of
					your best work.
				</Typography>
				<Button variant='outlined'>Learn More</Button>
			</InfoWrapper>
			<ImageWrapper>
				<img width='100%' src={HeroImage} />
			</ImageWrapper>
		</Root>
	);
};

export default HeroSection;

const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	background: theme.palette.background.paper,
}));

const InfoWrapper = styled(Stack)(({ theme }) => ({
	width: '40%',
	padding: theme.spacing(10),
	alignItems: 'flex-start',
}));

const ImageWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: 1,
}));
