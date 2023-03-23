import { TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
	name: string;
	label?: string;
}
const TextInput: FC<Props> = ({ name, label }) => {
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
					/>
				);
			}}
		/>
	);
};

export default TextInput;
