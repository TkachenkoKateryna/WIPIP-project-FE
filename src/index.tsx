import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
=======
import { CssBaseline, ThemeProvider } from '@mui/material';
>>>>>>> main
import './assets/styles/index.css';
import theme from './theme/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	</Provider>
);
