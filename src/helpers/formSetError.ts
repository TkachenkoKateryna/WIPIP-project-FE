import { UseFormSetError, FieldValues } from 'react-hook-form';
import { ValidationError } from '../models/ValidationError';

export const formSetErrors = <T extends FieldValues = Record<string, unknown>>(
	e: unknown,
	setError: UseFormSetError<T>
) => {
	const error = e as ValidationError<T>;

	setError(error.field, {
		message: error.message,
	});
};
