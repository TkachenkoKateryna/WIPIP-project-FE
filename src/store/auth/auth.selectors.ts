import { RootState } from '../store';

export const isAuthenticatedUser = (state: RootState) =>
	state.authReducer.token;
export const getUser = (state: RootState) => state.authReducer.user;
export const getUserRole = (state: RootState) => state.authReducer.user.role;
