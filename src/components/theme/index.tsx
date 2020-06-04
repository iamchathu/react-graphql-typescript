import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const getTheme = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Montaga"',
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

const theme = getTheme();

export default theme;
