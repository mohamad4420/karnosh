import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#720101',
    },

    error: {
      main: '#8B0000',
    },
    background: {
      default: '#000',
    },
  },

 

});

export default theme;