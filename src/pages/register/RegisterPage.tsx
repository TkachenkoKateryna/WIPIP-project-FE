import { FC } from 'react';
import { styled } from '@mui/material';

import RegisterForm from './components/RegisterForm';
import AuthSrc from '../../assets/images/login.png';
import Page from '../../components/containers/Page';

const RegisterPage: FC = () => {
	return (
		<Page title='Register'>
			<Root>
				<FormWrapper>
					<RegisterForm />
				</FormWrapper>
				<ImageWrapper>
					<img src={AuthSrc} />
				</ImageWrapper>
			</Root>
		</Page>
	);
};

export default RegisterPage;

const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	background: theme.palette.background.paper,
	height: '100%',
}));

const FormWrapper = styled('div')({
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
});

const ImageWrapper = styled('div')({ flex: 1 });
