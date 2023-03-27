import { lighten, PaletteOptions } from '@mui/material';
import { alpha } from '@mui/material/styles';

const primaryColor = '#5A6ACE';
const secondaryColor = '#FF9100';

const palette: PaletteOptions = {
	primary: {
		main: primaryColor,
		light: lighten(primaryColor, 0.15),
		100: lighten(primaryColor, 0.8),
	},
	secondary: {
		main: secondaryColor,
		light: lighten(secondaryColor, 0.7),
		contrastText: '#828282',
		dark: '#C4C4C4',
		100: alpha(secondaryColor, 0.3),
	},
	text: {
		primary: '#29305B',
		secondary: '#717579',
	},
	grey: {
		100: '#EEEEEE',
		200: '#E3E2E1',
		300: '#BDBDBD',
		400: 'rgba(0, 0, 0, 0.05)',
	},
	success: {
		main: '#54D62C',
		dark: '#229A16',
		light: '#AAF27F',
	},
	warning: {
		main: '#FFC107',
		dark: '#B78103',
		light: '#FFE16A',
	},
	error: {
		main: '#FF4842',
		dark: '#B72136',
		light: '#FFA48D',
	},
	common: {
		white: '#FFF',
		black: '#000',
	},
	background: {
		default: '#EEEFF3',
		paper: '#FBFBFB',
	},
};

export default palette;
