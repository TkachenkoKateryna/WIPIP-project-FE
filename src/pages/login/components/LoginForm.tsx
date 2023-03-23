import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Button, styled, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import TextInput from '../../../components/inputs/TextInput';
import { useDispatch } from '../../../store/store';
import { loginThunk } from '../../../store/auth/auth.actions';
import { formSetErrors } from '../../../helpers/formSetError';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(4).max(20),
});

const LoginForm: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const methods = useForm<LoginFormValues>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<LoginFormValues> = async (payload) => {
		try {
			await dispatch(loginThunk(payload));
			navigate('/');
		} catch (error) {
			formSetErrors<LoginFormValues>(error, methods.setError);
		}
	};

	return (
		<Root>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<TextInput name='email' label='Email' />
					<TextInput name='password' label='Password' />

					<Typography variant='body1'>
						If you are not registered, please, go to
						<Link to='/auth/register'> Register Page </Link>
					</Typography>

					<Button type='submit' variant='contained'>
						Login
					</Button>
				</form>
			</FormProvider>
		</Root>
	);
};

export default LoginForm;

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
