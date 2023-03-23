import { FC } from 'react';
import { styled } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import AuthSrc from '../../assets/images/login.png';

const RegisterPage: FC = () => {
	return (
		<Root>
			<FormWrapper>
				<RegisterForm />
			</FormWrapper>
			<ImageWrapper>
				<img src={AuthSrc} />
			</ImageWrapper>
		</Root>
	);
};

export default RegisterPage;

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
