import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#0B72B9';
const secondaryColor = '#FFBA60';

const theme = createMuiTheme({
  palette: {
    common: {
      primaryColor,
      secondaryColor,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: primaryColor,
      lineHeight: 1.5,
    },
  },
});

export default theme;
