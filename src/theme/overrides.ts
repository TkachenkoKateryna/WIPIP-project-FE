import { Components, Theme } from '@mui/material';

const componentsOverrides = (theme: Theme): Components<unknown> => ({
	MuiCssBaseline: {
		styleOverrides: {
			'body, #root': {
				height: '100%',
				width: '100%',
				margin: '0 auto',
				fontFamily: 'Roboto',
				color: theme.palette.text.primary,
				maxWidth: 1300,
			},
			body: {
				overflowX: 'hidden',
			},
			img: {
				display: 'block',
				maxWidth: '100%',
			},
			a: {
				fontSize: 16,
				textDecoration: 'none',
			},
			p: {
				margin: 0,
			},
		},
	},
	MuiTextField: {
		styleOverrides: {
			root: {
				marginBottom: theme.spacing(1),
			},
		},
	},
});

export default componentsOverrides;
