import React from 'react'
import { useNavigate } from 'react-router-dom'


function Card (props) {
const { id , img , name , price} = props
const navigate = useNavigate()

  return ( 
    
    <div className="card" >
    <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <button className= "addCart" onClick={()=>navigate(`/item/${id}`)}>Ver detalle</button>
    
    </div>
    
    
  )
}

export default Card