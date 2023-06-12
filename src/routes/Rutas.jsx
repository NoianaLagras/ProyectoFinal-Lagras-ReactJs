import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404 from '../pages/Error404';
import ItemDetail from '../pages/ItemDetail';
import Medidas from '../pages/Medidas';
import Preguntas from '../pages/Preguntas';
import Contacto from '../pages/Contacto';
import ItemListContainer from '../pages/ItemListContainer';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import UserCheckout from '../pages/UserCheckout';

const Rutas = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/medidas" element={<Medidas />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default Rutas;