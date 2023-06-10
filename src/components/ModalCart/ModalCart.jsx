import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const ModalCart = ({ isOpen, onClose }) => {
  const { carrito, giveMeTotal, removeCarrito, handleCantidadChange } = useContext(CarritoContext);

  const handleRemoveProduct = (productId) => {
    removeCarrito(productId);
  };

  return (
    <div>
      Carrito
      {isOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <div>
              <h2 className="modal-head">Carrito de compras</h2>
              <p onClick={onClose} className="close-modal">
                ✖️
              </p>
            </div>
            <ul className="modal-products">
              {carrito.map((item) => (
                <div key={item.id} className="modal-items">
                  <img src={item.img} alt={item.name} />
                  <p className="modal-name">{item.name}</p>
                  <div className='modal-cantidad'>
                    <p className='modal-button'onClick={() => handleCantidadChange(item.id, item.cantidad - 1)}>➖</p>
                    <span className='modal-numero'>{item.cantidad}</span>
                    <p className='modal-button' onClick={() => handleCantidadChange(item.id, item.cantidad + 1)}>➕</p>
                  </div>
                  <div className='final-price'>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio total: ${item.price * item.cantidad}.00</p>
                  </div>
                  <p className="remove-modal" onClick={() => handleRemoveProduct(item.id)}>X</p>
                </div>
              ))}
            </ul>
            <div className='modal-footer'>
              <p>Total final: ${giveMeTotal}</p>
              <Link to="/checkout">
                <button>Ir al Checkout➡️</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCart