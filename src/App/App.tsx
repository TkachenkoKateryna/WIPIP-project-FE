import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ErrorFallback } from '../components/errors/ErrorFallback';
import Loader from '../components/shared/Loader';
import MainLayout from '../layout/MainLayout';
import { authorize } from '../store/auth/auth.actions';
import { useDispatch } from '../store/store';
import { ErrorBoundary } from './../components/errors/ErrorBoundary';

import 'react-toastify/dist/ReactToastify.css';

const jwt = localStorage.getItem('token');

const App: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const fetchUser = async (): Promise<void> => {
			try {
				const res = await dispatch(authorize(String(jwt)));
				if (res?.expired) {
					navigate('/');
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

	if (loading) return <Loader />;

	return (
		<ErrorBoundary fallback={<ErrorFallback />}>
			<ToastContainer position='bottom-right' hideProgressBar theme='colored' />
			<MainLayout />
		</ErrorBoundary>
	);
};

export default App;
