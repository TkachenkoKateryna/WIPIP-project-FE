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
	MuiTableContainer: {
		styleOverrides: {
			root: {
				borderRadius: 5,
			},
		},
	},
	MuiTableRow: {
		styleOverrides: {
			root: ({ ownerState }) => ({
				'&:last-child td, &:last-child th': {
					border: 0,
				},
				...(ownerState.hover && {
					'&:hover': {
						cursor: 'pointer',
					},
				}),
			}),
		},
	},
	MuiTableCell: {
		styleOverrides: {
			root: {
				padding: '8px 12px',

				'&:first-of-type': {
					paddingLeft: 20,
				},
				'&:last-child': {
					paddingRight: 20,
				},
			},
			head: {
				backgroundColor: theme.palette.grey[300],
				fontSize: 15,
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				textTransform: 'initial',
				lineHeight: 1.5,
				borderRadius: 8,
			},
		},
	},
});

export default componentsOverrides;
