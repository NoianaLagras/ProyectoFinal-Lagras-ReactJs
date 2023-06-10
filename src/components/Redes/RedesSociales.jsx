import React from 'react'
import {BsFacebook ,BsInstagram ,} from "react-icons/bs"
import { FaRegHandshake } from "react-icons/fa";
import { Link } from 'react-router-dom';
const RedesSociales = () => {
  return (
    <div className='redes'>
      <Link to='https://www.facebook.com'className='redIcon'>
        <div ><BsFacebook /></div>
      </Link>
      <Link to='https://www.instagram.com'className='redIcon'>
        <div ><BsInstagram /></div>
      </Link>
      <Link to='https://www.mercadolibre.com'className='redIcon'>
        <div ><FaRegHandshake /></div>
      </Link>
    </div>
  )
}

export default RedesSociales