import { styled } from '@mui/material';
import { FC } from 'react';

import AuthSrc from '../../assets/images/login.png';
import LoginForm from './components/LoginForm';

const LoginPage: FC = () => {
	return (
		<Root>
			<FormWrapper>
				<LoginForm />
			</FormWrapper>
			<ImageWrapper>
				<img src={AuthSrc} />
			</ImageWrapper>
		</Root>
	);
};

export default LoginPage;

const Root = styled('div')({
	display: 'flex',
	alignItems: 'center',
});

const FormWrapper = styled('div')({
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
});

const ImageWrapper = styled('div')({ flex: 1 });
