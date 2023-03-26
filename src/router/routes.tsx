import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App/App';
import LoginPage from '../pages/login/LoginPage';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'auth',
				children: [{ path: 'login', element: <LoginPage /> }],
			},
		],
	},
];

export const router = createBrowserRouter(routes);
