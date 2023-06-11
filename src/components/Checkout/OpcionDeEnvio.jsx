import React from 'react'

const OpcionDeEnvio = ({ opcionEnvio, handleShippingOptionChange }) => {
    return (
      <ul className='seleccion-envios'>
        <li
          onClick={() => handleShippingOptionChange('sucursal')}
          className={opcionEnvio === 'sucursal' ? 'selected' : ''}
        >
          Correo Argentino (Sucursal): $1.800
        </li>
        <li
          onClick={() => handleShippingOptionChange('domicilio')}
          className={opcionEnvio === 'domicilio' ? 'selected' : ''}
        >
          Correo Argentino (Domicilio): $2.100
        </li>
        <li
          onClick={() => handleShippingOptionChange('transporte')}
          className={opcionEnvio === 'transporte' ? 'selected' : ''}
        >
          Transporte 24hs (CABA y GBA): $1.600
        </li>
        <li
          onClick={() => handleShippingOptionChange('retiro')}
          className={opcionEnvio === 'retiro' ? 'selected' : ''}
        >
          Retiro en sucursal
        </li>
      </ul>
    );
  };
  

export default OpcionDeEnvio