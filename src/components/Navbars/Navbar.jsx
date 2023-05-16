import React from 'react'
import CartWidget from './CartWidget'
import Logo from '../../assets/images/Logo.webp'
import '../../App.css'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
const navigate = useNavigate()
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky">
    <div><img src={Logo} alt="Logo" className='logoP' onClick={()=>navigate(`/`)}/></div>
    <div className="container-fluid">
    <p className="navbar-brand" >Neathur Shop...</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </p>
          <ul className="dropdown-menu bg-dark">
            <li><NavLink className="dropdown-item  bg-dark text-white p-2 " to={'/category/1'}>Anillos</NavLink></li>
            <li><NavLink className="dropdown-item bg-dark text-white p-2 " to={'/category/3'}>Pulseras</NavLink></li>
            <li><NavLink className="dropdown-item bg-dark text-white p-2 " to={'/category/2'}>Collares</NavLink></li>
          </ul></li>
        <li className="nav-item dropdown ">
          <p className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Informacion
          </p>
          <ul className="dropdown-menu bg-dark">
            <li><NavLink className="dropdown-item text-white p-2 " to={'/medidas'}>Medida de Anillos</NavLink></li>
            <li><NavLink className="dropdown-item text-white p-2  " to={'/preguntas'}>Preguntas</NavLink></li></ul>

        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/contacto'}>Contacto</NavLink>
        </li>
      </ul>
    </div>
  </div>
  <h2><CartWidget/>1</h2>
</nav>
  )
}

export default Navbar