import React, { useRef, useState } from 'react';
import Container from '../components/layout/Container';
import RedesSociales from '../components/Redes/RedesSociales';
import Swal from 'sweetalert2';
import ComponenteFormulario from '../components/Formulario/ComponenteFormulario';


const Contacto = () => {

  const formulario = useRef(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    mail: "",
    terminos: false,
    mensaje: ""
    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion =
    formValues.firstName !== "" &&
    formValues.lastName !== "" &&
    formValues.city !== "" &&
    formValues.mail !== "" &&
    formValues.terminos === true &&
    formValues.mensaje !== "";
  validacion
    ? Swal.fire({
        icon: 'success',
        title: 'Su Mensaje ha sido enviado',
        text: 'Le responderemos en breve a su email registrado',
        showConfirmButton: false,
        timer: 5000
      }).then(() => {
        console.log(formValues);
        formulario.current.reset();
        setTimeout(() => {
          setFormValues({
            firstName: "",
            lastName: "",
            city: "",
            mail: "",
            terminos: false,
            mensaje: ""
          });
        }, 2000);
      })
    : Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, complete todos los campos',
        showConfirmButton: true,
        timer: 5000
      });
    }
  return (
    <Container>
      <div className='ContactoHead'>
        <h1 className='contactoTitulo'>Contactanos !</h1>
        <p className='contactoParrafo'>
          Bienvenido/a a nuestra página de contacto. Si tienes alguna pregunta, comentario o sugerencia, por favor no dudes en ponerte en contacto con nosotros a través del formulario de contacto que encontrarás más abajo.
        </p>
      </div>

      <div className='contactoContainer'>
        <div className='contactoForm'>
          <form ref={formulario} onSubmit={handleSubmit} name= 'formValue' className="row g-3 needs-validation">
          <ComponenteFormulario
        label="First name"
        placeholder="Nombre"
        name="firstName"
        value={formValues.firstName}
        onChange={handleChange}
      />
      <ComponenteFormulario
        label="Last name"
        placeholder="Apellido"
        name="lastName"
        value={formValues.lastName}
        onChange={handleChange}
      />
      <ComponenteFormulario
        label="Correo Electronico"
        placeholder="Email"
        name="mail"
        value={formValues.mail}
        onChange={handleChange}
      />
      <ComponenteFormulario
        label="Ciudad y Provincia"
        placeholder="Ciudad"
        name="city"
        value={formValues.city}
        onChange={handleChange}
      />
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="validationFormCheck1"
          onChange={handleChange}
          name="terminos"
          checked={formValues.terminos}
        />
        <label className="form-check-label" htmlFor="validationFormCheck1">
          Acepta Terminos y Condiciones
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="validationTextarea">Mensaje</label>
        <textarea
          className="form-control"
          id="validationTextarea"
          defaultValue={formValues.mensaje}
          name="mensaje"
          onChange={handleChange}
          required
        ></textarea>
      </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" required >Enviar</button>
  </div>
          </form>
        </div>
        <div className='contactoDatos'>
          <p>Encontranos aca !</p>
          <RedesSociales />
          
        </div>
      </div>
    </Container>
  );
};
 
export default Contacto ;

