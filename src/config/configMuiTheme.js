import { createTheme } from '@mui/material/styles';

// Motyw definiujący kolory przycisków dla motywu 'light' i 'dark'
const theme_MUI = createTheme({
    palette: {
      primary: {
        main: "#306060", // Kolor dla przycisków motywu light
      },
      secondary: {
        main: "#0288D1", // Kolor dla przycisków motywu dark
      }
    },
  });

  export default theme_MUI;