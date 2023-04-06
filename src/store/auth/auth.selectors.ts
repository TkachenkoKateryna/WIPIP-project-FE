import { RootState } from '../store';

export const isAuthenticatedUser = (state: RootState) =>
	!!state.authReducer.user.name;
export const getUser = (state: RootState) => state.authReducer.user;
export const getUserRole = (state: RootState) => state.authReducer.user.role;
