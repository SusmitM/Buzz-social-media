import { useState } from 'react';
import { ThemeProvider,createTheme,Box } from '@mui/material';
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
        <Box backgroundColor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
      <AllRoutes/>
        </Box>
      
      </ThemeProvider>
     

      
     
      
    </div>
  );
}

export default App;
