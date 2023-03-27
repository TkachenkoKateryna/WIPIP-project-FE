import jwtDecode from 'jwt-decode';

import agent, { setAuthorizationHeader } from '../../api/agent';
import { ThunkAction } from '../store';
import { logout, setToken, setUser } from './auth.slice';

type DecodedJwt = {
	exp: number;
};
export const authorize = (
	token: string
): ThunkAction<Promise<{ expired: boolean } | void>> => {
	return async (dispatch) => {
		try {
			const decodedToken: DecodedJwt = jwtDecode(token);

			const isExpired = new Date(decodedToken.exp * 1000) < new Date();

			if (isExpired) {
				dispatch(logout());

				return {
					expired: true,
				};
			} else {
				dispatch(setToken(token));
				setAuthorizationHeader(token);

				const user = await agent.Auth.getUser();
				dispatch(setUser(user));
			}
		} catch (error) {
			throw Error();
		}
	};
};

export const loginThunk = (
	user: LoginFormValues
): ThunkAction<Promise<void>> => {
	return async (dispatch) => {
		const token = await agent.Auth.login(user);
		localStorage.setItem('token', token);
		dispatch(authorize(token));
	};
};

export const registerThunk = (
	user: RegisterFormValues
): ThunkAction<Promise<void>> => {
	return async (dispatch) => {
		const token = await agent.Auth.register(user);
		localStorage.setItem('token', token);
		dispatch(authorize(token));
	};
};

export const logoutThunk = (): ThunkAction<Promise<void>> => {
	return async (dispatch) => {
		await dispatch(logout());
		localStorage.removeItem('token');
		setAuthorizationHeader();
	};
};
