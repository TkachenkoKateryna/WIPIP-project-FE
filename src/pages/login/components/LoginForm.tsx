import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import TextInput from '../../../components/inputs/TextInput';
import { useDispatch } from '../../../store/store';
import { loginThunk } from '../../../store/auth/auth.actions';

interface FormInput {
	email: string;
	password: string;
}

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const methods = useForm<FormInput>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FormInput> = (payload) => {
		dispatch(loginThunk(payload));
		navigate('/');
	};

	return (
		<Root>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<TextInput name='email' label='Email' />
					<TextInput name='password' label='Password' />
					<Button type='submit' variant='contained'>
						Submit
					</Button>
				</form>
			</FormProvider>
		</Root>
	);
};

export default LoginForm;

const Root = styled('div')(({ theme }) => ({
	'*': {
		marginBottom: theme.spacing(),
	},
}));
