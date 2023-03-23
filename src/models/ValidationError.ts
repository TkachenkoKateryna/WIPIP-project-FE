import { FieldPath, FieldValues } from 'react-hook-form';

export class ValidationError<
	T extends FieldValues = Record<string, unknown>
> extends Error {
	field: FieldPath<T>;
	statusCode: number;

	constructor(message: string, field: string, statusCode: number) {
		super(message);
		this.name = 'ValidationError';
		this.field = field as FieldPath<T>;
		this.statusCode = statusCode;
	}
}
