import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

import MainLayout from '../layout/MainLayout';
import { authorize } from '../store/auth/auth.actions';
import { useDispatch } from '../store/store';
import { ErrorBoundary } from './../components/errors/ErrorBoundary';
import { ErrorFallback } from '../components/errors/ErrorFallback';

import 'react-toastify/dist/ReactToastify.css';

const jwt = localStorage.getItem('token');

const App: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	console.log('loading', loading);

	useEffect(() => {
		setLoading(true);

		const fetchUser = async (): Promise<void> => {
			try {
				if (jwt) {
					const res = await dispatch(authorize(jwt));
					if (res?.expired) {
						navigate('/');
					}
				}
			} finally {
				setLoading(false);
			}
		};

		if (jwt) {
			fetchUser();
		} else {
			setLoading(false);
		}
	}, []);

	if (loading) return <BarLoader color='#36d7b7' />;

	return (
		<ErrorBoundary fallback={<ErrorFallback />}>
			<ToastContainer position='bottom-right' hideProgressBar theme='colored' />
			<MainLayout />
		</ErrorBoundary>
	);
};

export default App;
