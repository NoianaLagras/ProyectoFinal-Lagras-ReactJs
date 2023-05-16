import React from 'react'
import Container from '../components/layout/Container'
import RedesSociales from '../components/Redes/RedesSociales'
import DondeEstamos from '../components/Redes/DondeEstamos'
const Contacto = () => {
  return (
    <Container>
    
         <div className='ContactoHead'> <h1 className='contactoTitulo'>Contactanos !</h1> 
         <p className='contactoParrafo'>Bienvenido/a a nuestra página de contacto. Si tienes alguna pregunta, comentario o sugerencia, por favor no dudes en ponerte en contacto con nosotros a través del formulario de contacto que encontrarás más abajo. </p>
         </div>

        <div className='contactoContainer'>
          <div className='contactoForm' >
            <form className="row g-3 needs-validation " novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value="Nombre" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value="Apellido" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  <label for="floatingTextarea2">Mensaje</label>
</div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
         </form>
         </div>
         <div className='contactoDatos'>
          <RedesSociales/>
          <p>Encontranos aca !</p>
          <DondeEstamos/>
         </div>
           



        
    </div>


    </Container>
  )
}

export default Contacto