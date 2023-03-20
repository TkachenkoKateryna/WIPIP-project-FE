import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import MainLayout from '../layout/MainLayout';
import { authorize } from '../store/auth/auth.actions';
import { useDispatch } from '../store/store';

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

	console.log('loading', loading);

	if (loading) return <BarLoader color='#36d7b7' />;
	return <MainLayout />;
};

export default App;
