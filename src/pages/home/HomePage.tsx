import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../../components/containers/Page';
import { isAuthenticatedUser } from '../../store/auth/auth.selectors';
import { useSelector } from '../../store/store';
import HeroSection from './components/HeroSection';

const HomePage = () => {
	const isAuthenticated = useSelector(isAuthenticatedUser);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/projects');
		}
	}, [isAuthenticated]);

	return (
		<Page title='Homepage'>
			<HeroSection />
		</Page>
	);
};

export default HomePage;
