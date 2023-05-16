import React from 'react'
const Saludo = ({greeting}) => {
  return (
     <div className='containerSaludo'>
        <div className='saludo'>{greeting}</div>
     </div>
  
  )
}

export default Saludo