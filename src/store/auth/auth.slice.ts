import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
	token: string;
	user: User;
};

const initialState: AuthState = {
	token: '',
	user: {} as User,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (): AuthState => {
			return {
				...initialState,
			};
		},
		setUser: (state, { payload }): void => {
			state.user = payload;
		},
		setToken: (state, { payload }): void => {
			state.token = payload;
		},
	},
});

export const { logout, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
