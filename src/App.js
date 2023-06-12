import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Rutas from './routes/Rutas';
import './App.css';

import { ProductProvider } from './context/ProductContext';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
  <div className='App'>
      <ProductProvider>
        <CarritoProvider>
          <AuthProvider>
        <Rutas />
        </AuthProvider>
        </CarritoProvider>
      </ProductProvider>
      <ToastContainer />
    </div>
  );
}

export default App;