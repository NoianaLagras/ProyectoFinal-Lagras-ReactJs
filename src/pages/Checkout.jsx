import React, { Fragment, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { calculateTotal, handleInputChange } from '../helpers/index';
import OpcionDeEnvio from '../components/Checkout/OpcionDeEnvio';
import ComponenteFormulario from '../components/Formulario/ComponenteFormulario';
import Logo from '../assets/images/Logo.webp';
import CheckoutHandleSubmit from '../hooks/Checkout/useCheckoutHandleSubmit';
import { AuthContext } from '../context/AuthContext';
import UserCheckout from './UserCheckout';

const Checkout = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [opcionEnvio, setOpcionEnvio] = useState('');
  const formulario = useRef();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: '',
    email: '',
    confirmEmail: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    handleInputChange(e, formValues, setFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CheckoutHandleSubmit(carrito, setCarrito, opcionEnvio, formValues, setFormValues, formulario, setOpcionEnvio);
  };

  const subtotal = carrito.reduce((accumulator, item) => accumulator + item.price * item.cantidad, 0);
  const total = calculateTotal(carrito, opcionEnvio);
  const handleShippingOptionChange = (option) => {
    setOpcionEnvio(option);
  };

  if (isLoggedIn) {
    return <UserCheckout />;
  }

  return (
    <Fragment>
      <div className="checkout-header">
        <img src={Logo} alt="neathur-shop" onClick={() => navigate(`/`)} className="logoP" />
        <h2>Checkout !</h2>
      </div>
      <div className="checkout-compras">
        
          <form ref={formulario} onSubmit={handleSubmit} className="checkout-Formulario ">
            <ComponenteFormulario
              label="Nombre y Apellido"
              placeholder="Nombre"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
            <ComponenteFormulario
              label="Correo Electrónico"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <ComponenteFormulario
              label="Confirmar Correo Electrónico"
              placeholder="Confirmar Email"
              name="confirmEmail"
              value={formValues.confirmEmail}
              onChange={handleChange}
            />
            <ComponenteFormulario
              label="Ciudad , Provincia"
              placeholder="Ciudad , Provincia"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
            <ComponenteFormulario
              label="Direccion "
              placeholder="Direccion"
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
            <ComponenteFormulario
              label="Codigo Postal"
              placeholder="Codigo Postal"
              name="postalCode"
              value={formValues.postalCode}
              onChange={handleChange}
            />
            <div className="envios border border-2 border-dark p-2 mb-2 border-opacity-50">
              <p>Subtotal: ${subtotal}</p>
              <p>
                <strong>Seleccione cómo desea retirar su pedido:</strong>
              </p>
              <OpcionDeEnvio opcionEnvio={opcionEnvio} handleShippingOptionChange={handleShippingOptionChange} />
              <p className="checkout-total">Total Final: ${total}</p>
            </div>
            <button type="submit" className="order">
              Ordenar Compra
            </button>
          </form>

        <ul className="checkout-products border border-2 border-dark p-2 mb-2 border-opacity-50">
          <p className="checkout-carrito">Carrito : </p>
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
      </div>
    </Fragment>
  );
};

export default Checkout;
