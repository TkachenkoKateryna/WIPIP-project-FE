import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Props = TextFieldProps & {
	name: string;
	label?: string;
};

const TextInput: FC<Props> = ({ name, label, ...props }) => {
	const { control, register } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => {
				return (
					<TextField
						{...field}
						fullWidth
						variant='outlined'
						size='medium'
						label={label}
						error={!!errors[name]}
						helperText={errors?.[name]?.message?.toString()}
						{...register(name)}
						{...props}
					/>
				);
			}}
		/>
	);
};

export default TextInput;
