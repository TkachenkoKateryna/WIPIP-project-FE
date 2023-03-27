import { PayloadAction } from '@reduxjs/toolkit';

export const pendingAction = (state: any): void => {
	state.loading = true;
	state.error = null;
};

export const successAction = <Payload = unknown>(
	state: any,
	{ payload }: PayloadAction<Payload>,
	field = 'data'
): void => {
	state[field] = payload;
	state.loading = false;
	state.loaded = true;
	state.error = null;
};

export const rejectedAction = <Error = null>(
	state: any,
	{ payload }: { payload: Error }
): void => {
	state.loading = false;
	state.error = payload;
};
