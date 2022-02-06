import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#fff',
      text:"rgba(255, 255, 255, 0.603)"
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