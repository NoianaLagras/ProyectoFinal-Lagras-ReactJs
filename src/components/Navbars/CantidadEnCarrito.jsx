import React, { Fragment, useContext, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import CartWidget from './CartWidget';
import ModalCart from '../ModalCart/ModalCart';

const CantidadEnCarrito = () => {
  const { carrito } = useContext(CarritoContext);
  const [isCartOpen, setCartOpen] = useState(false);

  const cantidadDeProductos = carrito.length;

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <Fragment>
      <h2 onClick={handleOpenCart} className='carrito-modal'>
        <CartWidget />
        <p className="CarritoLenght">{cantidadDeProductos}</p>
      </h2>

      {isCartOpen && (
        <ModalCart isOpen={isCartOpen} onClose={handleCloseCart}  />
      )}
    </Fragment>
  );
};

export default CantidadEnCarrito;