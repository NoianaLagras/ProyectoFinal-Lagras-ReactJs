import React, { Fragment, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import ComponenteFormulario from '../components/Formulario/ComponenteFormulario';
import Swal from 'sweetalert2';
import Logo from '../assets/images/Logo.webp';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const { carrito } = useContext(CarritoContext);
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
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      items: carrito,
      opcionEnvio,
      formData: formValues,
      total
    };
    if (formValues.email !== formValues.confirmEmail) {Swal.fire('Error', 'Los correos electrónicos no coinciden', 'error');
      return;}
    carrito.length === 0
      ? Swal.fire('Error', 'Por favor agregue un producto a su carrito', 'error')
      : opcionEnvio === ''
      ? Swal.fire('Error', 'Por favor seleccione el tipo de envío o retiro de su compra', 'error')
      : Swal.fire({
          icon: 'info',
          title: 'Estamos procesando su orden de compra',
          timer: 4000,
  timerProgressBar: true,
        }).then(async () => {
          try {
            const col = collection(db, 'orders');
            const order = await addDoc(col, orderData);
            Swal.fire( 'Su orden de compra se ha enviado correctamente',' Codigo de orden de compra :  '+ order.id,'success');
            setFormValues({
              firstName: '',
              email: '',
              address: '',
              city: '',
              postalCode: ''
            });
            setOpcionEnvio('');
          } catch (error) {
            console.error('Error enviando orden', error);
            Swal.fire(
              'Error',
              'Error al enviar la orden. Por favor, intente nuevamente más tarde.',
              'error'
            );
          }
        }).then(() => {
            console.log(formValues);
            formulario.current.reset();
            setTimeout(() => {
              setFormValues({
                firstName: '',
                email: '',
                address: '',
                city: '',
                postalCode: ''
              });
            }, 2000);
          })
  };

  const calculateTotal = (subtotal, opcionEnvio) => {
    let total = subtotal;
    opcionEnvio = opcionEnvio ?? 'retiro';
    total +=
      opcionEnvio === 'sucursal'
        ? 1800
        : opcionEnvio === 'transporte'
        ? 1600
        : opcionEnvio === 'domicilio'
        ? 2100
        : opcionEnvio === 'retiro'
        ? 0
        : 0;
    return total;
  };

  const subtotal = carrito.reduce((accumulator, item) => accumulator + item.price * item.cantidad, 0);

  const total = calculateTotal(subtotal, opcionEnvio);

  const handleShippingOptionChange = (option) => {
    setOpcionEnvio(option);}
 
  return (
    <Fragment>
      <div className='checkout-header'>  
      <img src={Logo} alt="neathur-shop" onClick={()=>navigate(`/`)} className='logoP'/>
      <h2>Checkout !</h2>
      </div>
    <div className='checkout-compras'>
    <form ref={formulario} onSubmit={handleSubmit} className='checkout-Formulario '>
    <ComponenteFormulario label="Nombre y Apellido"placeholder="Nombre" name="firstName"value={formValues.firstName} onChange={handleChange}/>
    <ComponenteFormulario label="Correo Electrónico"  placeholder="Email"
  name="email" value={formValues.email} onChange={handleChange} />
<ComponenteFormulario  label="Confirmar Correo Electrónico"  placeholder="Confirmar Email" name="confirmEmail" value={formValues.confirmEmail} onChange={handleChange} />
      <ComponenteFormulario
        label="Ciudad , Provincia" placeholder="Ciudad , Provincia" name="city" value={formValues.city}onChange={handleChange}/>
      <ComponenteFormulario label="Direccion " placeholder="Direccion" name="address" value={formValues.address} onChange={handleChange}/>
      <ComponenteFormulario label="Codigo Postal" placeholder="Codigo Postal" name="postalCode" value={formValues.postalCode}onChange={handleChange}/>
      <div className='envios border border-2 border-dark p-2 mb-2 border-opacity-50'>
      <p>Subtotal: ${subtotal}</p>

            <p> <strong>Seleccione como desea retirar su pedido:</strong></p>
            <ul className='seleccion-envios'>
              <li onClick={() => handleShippingOptionChange('sucursal')} className={opcionEnvio === 'sucursal' ? 'selected' : ''}>
 Correo Argentino (Sucursal): $1.800</li>
              <li onClick={() => handleShippingOptionChange('domicilio')}className={opcionEnvio === 'domicilio' ? 'selected' :''}
 >Correo Argentino (Domicilio): $2.100</li>
              <li onClick={() => handleShippingOptionChange('transporte')}className={opcionEnvio === 'transporte' ? 'selected' :''}
 >Transporte 24hs (CABA y GBA): $1.600</li>
              <li onClick={() => handleShippingOptionChange('retiro')}className={opcionEnvio === 'retiro' ? 'selected' :''}
>Retiro en sucursal</li>
</ul>

            <p className='checkout-total'>Total Final: ${total}</p>
          </div>
          <button type='submit' className='order'>Ordenar Compra</button>
        </form>
        
      <ul className="checkout-products border border-2 border-dark p-2 mb-2 border-opacity-50">
        <p className='checkout-carrito'>Carrito : </p>
              {carrito.map((item) => (
                <div key={item.id} className="checkout-items">
                  <img src={item.img} alt={item.name} />
                  <p className="checkout-items">{item.name}</p>
                  <div>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio total: ${item.price * item.cantidad}.00</p>
                  </div>
                </div> ))}
            </ul>
    </div>
    </Fragment>
  );
};

export default Checkout;
