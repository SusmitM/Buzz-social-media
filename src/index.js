import React from 'react';
import ReactDOM from 'react-dom/client';
import { makeServer } from "./server";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { DataContextProvider } from './contexts/DataContext';



makeServer();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <DataContextProvider>
      <App />

      </DataContextProvider>
   
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



