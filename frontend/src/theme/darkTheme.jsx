import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    third: {
      main: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: 'Arial',
    fontSize: 14,
    // Customize typography variants as needed
    h1: {
      fontSize: 100,
      fontWeight: 500,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    // ...
  },
  // Customize other aspects of the theme, such as spacing and breakpoints
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});


