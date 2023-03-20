import { createTheme } from '@mui/material';
import componentsOverrides from './overrides';
import typography from './typography';
import palette from './palette';

const theme = createTheme({
	spacing: 10,
	typography,
	palette,
});

theme.components = componentsOverrides(theme);

export default theme;
