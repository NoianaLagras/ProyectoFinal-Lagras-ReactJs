import React from 'react'
import Logo from '../../assets/images/Logo.webp'
const Spinner = () => {
  return (
    <div className='spinnerLogo'>
      <img src={Logo} alt="" className='spinner'/>
      <span className='cargando'>Cargando...</span>
    </div>
  )
}

export default Spinner