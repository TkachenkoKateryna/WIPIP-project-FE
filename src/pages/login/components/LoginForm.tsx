import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import TextInput from '../../../components/inputs/TextInput';
import { formSetErrors } from '../../../helpers/formSetError';
import { loginThunk } from '../../../store/auth/auth.actions';
import { useDispatch } from '../../../store/store';

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
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={1}>
					<TextInput name='email' label='Email' />
					<TextInput name='password' label='Password' />

					<Typography variant='body1'>
						If you are not registered, please, go to
						<Link to='/auth/register'> Register Page </Link>
					</Typography>

					<Button type='submit' variant='contained'>
						Login
					</Button>
				</Stack>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
