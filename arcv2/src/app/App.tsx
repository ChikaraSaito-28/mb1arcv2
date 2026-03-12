import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router';
import { router } from './routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;