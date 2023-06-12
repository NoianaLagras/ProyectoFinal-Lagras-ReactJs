import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.webp';
import { calculateTotal } from '../helpers';
import { CarritoContext } from '../context/CarritoContext';
import OpcionDeEnvio from '../components/Checkout/OpcionDeEnvio';
import { HandleUserSubmit } from '../hooks/Checkout/HandleUserSubmit';
import { AuthContext } from '../context/AuthContext';

const UserCheckout = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const [opcionEnvio, setOpcionEnvio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    HandleUserSubmit(carrito, setCarrito, opcionEnvio, setOpcionEnvio, user);
  };

  const handleShippingOptionChange = (option) => {
    setOpcionEnvio(option);
  };

  const subtotal = carrito.reduce(
    (accumulator, item) => accumulator + item.price * item.cantidad,
    0
  );

  const total = calculateTotal(carrito, opcionEnvio);

  return (
    <div>
      <div className="checkout-header">
        <img
          src={Logo}
          alt="neathur-shop"
          onClick={() => navigate(`/`)}
          className="logoP"
        />
        <h2>Checkout!</h2>
      </div>
      <h2 className="userCheckout">{`✅Usuario: 👤${user.email}`}</h2>
      <ul className="checkout-products border border-2 border-dark p-2 mb-2 border-opacity-50">
        <p className="checkout-carrito">Carrito:</p>
        {carrito.map((item) => (
          <div key={item.id} className="checkout-items">
            <img src={item.img} alt={item.name} />
            <p className="checkout-items">{item.name}</p>
            <div>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio total: ${item.price * item.cantidad}.00</p>
            </div>
          </div>
        ))}
      </ul>
      <div className="envios border border-2 border-dark p-2 mb-2 border-opacity-50">
        <p>Subtotal: ${subtotal}</p>
        <p>
          <strong>Seleccione cómo desea retirar su pedido:</strong>
        </p>
        <OpcionDeEnvio
          opcionEnvio={opcionEnvio}
          handleShippingOptionChange={handleShippingOptionChange}
        />
        <p className="checkout-total">Total Final: ${total}</p>
      </div>
      <button type="submit" className="order" onClick={handleSubmit}>
        Ordenar Compra
      </button>
    </div>
  );
};

export default UserCheckout;