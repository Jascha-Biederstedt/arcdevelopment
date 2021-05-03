import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#0B72B9';
const secondaryColor = '#FFBA60';
const tertiaryColor = '#868686';

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
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: primaryColor,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: primaryColor,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: tertiaryColor,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: tertiaryColor,
    },
    learnButton: {
      borderColor: primaryColor,
      color: primaryColor,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
});

export default theme;
