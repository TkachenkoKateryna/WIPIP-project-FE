import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App/App';
import NotFoundPage from '../pages/errors/NotFoundPage';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import Projects from '../pages/projects/Projects';
import RegisterPage from '../pages/register/RegisterPage';
import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';
import Path from './paths';

export const routes: RouteObject[] = [
	{
		element: <App />,
		children: [
			{
				path: Path.home,
				element: <HomePage />,
			},
			{
				path: Path.auth,
				children: [
					{
						path: Path.login,
						element: (
							<GuestGuard>
								<LoginPage />
							</GuestGuard>
						),
					},
					{
						path: Path.register,
						element: (
							<GuestGuard>
								<RegisterPage />
							</GuestGuard>
						),
					},
				],
			},
			{
				path: Path.projects,
				element: (
					<AuthGuard>
						<Projects />
					</AuthGuard>
				),
			},
			{ path: Path.default, element: <NotFoundPage /> },
		],
	},
];

export const router = createBrowserRouter(routes);
