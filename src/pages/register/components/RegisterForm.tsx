import { yupResolver } from '@hookform/resolvers/yup';
import { Button, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from '../../../store/store';

import TextInput from '../../../components/inputs/TextInput';
import { UserRole } from '../../../constants/UserRole';
import { formSetErrors } from '../../../helpers/formSetError';
import { registerThunk } from '../../../store/auth/auth.actions';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(4).max(20),
	username: yup.string().required(),
});

const RegisterForm: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const methods = useForm<RegisterFormValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
			username: '',
			role: UserRole.LEAD,
		},
	});

	const onSubmit: SubmitHandler<RegisterFormValues> = async (payload) => {
		try {
			await dispatch(registerThunk(payload));
			navigate('/');
		} catch (error) {
			formSetErrors<RegisterFormValues>(error, methods.setError);
		}
	};

	return (
		<Root>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<TextInput name='username' label='Username' />
					<TextInput name='email' label='Email' />
					<TextInput name='password' label='Password' />

					<Typography variant='body1'>
						If you are already registered, please, go to
						<Link to='/auth/login'> Login Page </Link>
					</Typography>

					<Button type='submit' variant='contained'>
						Register
					</Button>
				</form>
			</FormProvider>
		</Root>
	);
};

export default RegisterForm;

const Root = styled('div')(({ theme }) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
	button: {
		marginBottom: theme.spacing(),
	},
	p: {
		margin: theme.spacing(1, 0, 1, 0),
	},
}));
