import React from 'react';
import { styled } from '@mui/material';

import LoginForm from './components/LoginForm';
import LoginSrc from '../../assets/images/login.png';

const LoginPage = () => {
	return (
		<Root>
			<FormWrapper>
				<LoginForm />
			</FormWrapper>
			<ImageWrapper>
				<img src={LoginSrc} />
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
