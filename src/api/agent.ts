import axiosLib, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { ValidationError } from '../models/ValidationError';

const axios = axiosLib.create({
	baseURL: 'http://localhost:5000/api',
});

export const setAuthorizationHeader = (token?: string) => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(
	async (response) => {
		return response;
	},
	(error: AxiosError) => {
		const { StatusCode, Field, Message } = error.response?.data as ApiError;

		if (Field) {
			throw new ValidationError(Message, Field, StatusCode);
		} else {
			let message = '';
			if (Message) {
				message = Message;
			} else {
				switch (StatusCode) {
					case 401:
						message = 'You sre not authorized';
						break;
					case 403:
						message = 'Forbidding info';
						break;
					case 404:
						message = 'Not-found error';
						break;
					case 500:
						message = 'Server-error error';
						break;
					default:
						message = 'Something went wrong';
						break;
				}
			}

			toast.error(message);
		}

		return Promise.reject(error);
	}
);

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

const Projects = {
	fetchAll: () => requests.get<Project[]>('/projects'),
	fetchById: (id: string) => requests.get<Project>(`/project/${id}`),
};

const agent = {
	Auth,
	Projects,
};

export default agent;
