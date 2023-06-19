import { useState } from 'react';
import { ThemeProvider,createTheme } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider  theme={darkTheme}>
      <Navbar/>
      <AllRoutes/>
      </ThemeProvider>
     

      
     
      
    </div>
  );
}

export default App;
