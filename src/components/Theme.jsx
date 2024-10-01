import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Merriweather", Arial, sans-serif',
    h3: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 900,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
        `,
    },
  },
});

export default theme;
