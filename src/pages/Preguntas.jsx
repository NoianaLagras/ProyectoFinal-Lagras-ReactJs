import React from 'react';
import Container from '../components/layout/Container';

const preguntas = [
  {
    pregunta: 'Cuidado de las piezas de metal',
    respuesta: 'Todas las piezas son realizadas totalmente a mano en plata, alpaca, cobre y/o bronce. Los metales siempre mutan como resultado natural del paso del tiempo. Recomendamos que no estén en contacto con productos químicos o de limpieza como tintura de pelo, perfumes, cremas, desodorantes, etc. Es normal que la plata se oscurezca con el paso del tiempo. El consejo en este caso es limpiar tus joyas de plata frecuentemente. Se debe frotar con la mano usando agua tibia y algún jabón que no contenga fosfatos o pasta dentífrica.',
  },
  {
    pregunta: '¿Cómo se realizan los envíos?',
    respuesta: 'Trabajamos con Correo Argentino, a sucursal o a domicilio. Nos dicen si prefieren a domicilio o a sucursal y se abona antes a través de Mercado Pago (les enviamos el link) ó por transferencia bancaria.',
  },
  {
    pregunta: '¿Cuánto tarda en llegar el pedido?',
    respuesta: 'El tiempo de entrega dependerá del tipo de envío seleccionado y de la logística del Correo. En general, la demora se encuentra entre 7 y 15 días hábiles luego de despachado. El despacho se realiza entre 24hs a 72hs luego de acreditado el pago.',
  },
  {
    pregunta: '¿Cuál es mi talla de anillo?',
    respuesta: 'Te sugiero ir al siguiente enlace para poder tomarte vos misma la medida. Te sugiero tomarla varias veces en distintos momentos del día, ya que los dedos cambian a lo largo del mismo.',
  },
];

function PreguntasFrecuentes() {
  return (
    <Container>
    <div className='Preguntas'>
      <div className='PreguntasFre'>
        <div className="accordion" id="accordionExample">
          {preguntas.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`collapse${index}`}>
                  <strong>{item.pregunta}</strong>
                </button>
              </h2>
              <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <h6>{item.respuesta}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </Container>
  );
}

export default PreguntasFrecuentes;