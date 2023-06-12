import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate ()
  return (
    <div className='image404'>
      <h1>Error 404</h1>
    <p>Lo siento, la página que estás buscando no ha sido encontrada. Es posible que se haya eliminado, cambiado de nombre o que nunca haya existido. Por favor, comprueba la dirección web que has introducido e inténtalo de nuevo.
Si has llegado aquí a través de un enlace externo, por favor, infórmanos del error para que podamos solucionarlo. También puedes utilizar el menú de navegación o el buscador para encontrar lo que estás buscando.
Gracias por tu comprensión.</p>
<button className='addCart' onClick={()=>navigate('/')} > ⬅️ir a home</button>
</div>
  )
}

export default Error404