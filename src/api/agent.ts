import axios, { AxiosHeaders, AxiosResponse } from 'axios';
import { store } from '../store/store';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use((config) => {
	const token = store.getState().authReducer.token;
	console.log('token', token);
	if (token && config.headers) {
		(config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
	}

	return config;
});

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: object) =>
		axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: object) =>
		axios.put<T>(url, body).then(responseBody),
	del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Auth = {
	register: (user: RegisterFormValues) =>
		requests.post<string>('/register', user),
	login: (user: LoginFormValues) => requests.post<string>('/login', user),
	getUser: () => requests.get<User>('/user'),
};

const agent = {
	Auth,
};

export default agent;
