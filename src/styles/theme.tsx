import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;