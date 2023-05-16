import React from 'react'
import Container from '../components/layout/Container'

const Preguntas = () => {
  return ( 
  <Container>
    <div className='Preguntas'>
      <div className='PreguntasFre'>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Cuidado de las piezas de metal</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h6>Todas las piezas son realizadas totalmente a mano en plata, alpaca, cobre y/o bronce. Los metales siempre mutan como resultado natural del paso del tiempo. Recomendamos que no esten en contacto con productos quimicos o de limpieza como tintura de pelo, perfumes, cremas, desodorantes etc. Es normal que la plata se oscurezca con el paso del tiempo. El consejo en este caso, es limpiar tus joyas de plata frecuentemente. Se debe frotar con la mano usando agua tibia y algun jabon que no contenga fosfatos o pasta dentífrica</h6>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>¿Cómo se realizan los envíos?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h6>Trabajamos con Correo Argentino, a sucursal o a domicilio. Nos dicen si prefieren a domicilio o a sucursal y se abona antes a través de Mercado Pago (les enviamos el link) ó por transferencia bancaria.</h6>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>¿Cuánto tarda en llegar el pedido?</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h6>El tiempo de entrega dependerá del tipo de envío seleccionado y de logística del Correo. En general la demora se encuentra entre 7 y 15 días hábiles luego de despachado. El despacho se realiza entre 24hs a 72hs luego de acreditado el pago.</h6>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <strong>¿Cual es mi talla de anillo?</strong>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Te sugeriero ir al siguiente enlace para poder tomarte vos misma la medida. Te sugeriero tomarla varias veces en distintos momentos del día ya que los dedos cambian a lo largo del mismo.</p></div>
    </div>
  </div>
    </div>
  </div>


    </div>
    </Container>
  )
}

export default Preguntas