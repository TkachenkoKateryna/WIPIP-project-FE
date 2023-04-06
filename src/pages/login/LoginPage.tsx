import { styled } from '@mui/material';
import { FC } from 'react';

import AuthSrc from '../../assets/images/login.png';
import Page from '../../components/containers/Page';
import LoginForm from './components/LoginForm';

const LoginPage: FC = () => {
	return (
		<Page title='Login'>
			<Root>
				<FormWrapper>
					<LoginForm />
				</FormWrapper>
				<ImageWrapper>
					<img src={AuthSrc} />
				</ImageWrapper>
			</Root>
		</Page>
	);
};

export default LoginPage;

const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	height: '100%',
	background: theme.palette.background.paper,
}));

const FormWrapper = styled('div')({
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
});

const ImageWrapper = styled('div')({ flex: 1 });
