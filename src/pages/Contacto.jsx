
import Swal from 'sweetalert2';
import { addDoc, collection } from 'firebase/firestore';
import { useContactForm } from '../hooks/ContactoHooks/useContactForm';
import { validateForm } from '../helpers/index'
import ComponenteFormulario from '../components/Formulario/ComponenteFormulario'
import {db} from '../firebase.config';
import RedesSociales from '../components/Redes/RedesSociales'
import Container from '../components/layout/Container'
const Contacto = () => {
  const { formulario, formValues, handleChange, resetForm } = useContactForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validacion = validateForm(formValues);

    if (validacion) {
      const contactoData = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        city: formValues.city,
        mail: formValues.mail,
        mensaje: formValues.mensaje,
      };
      const FormularioContacto = 'FormularioContacto';

      try {
        const col = collection(db, FormularioContacto);
        await addDoc(col, contactoData);
        formulario.current.reset();
        setTimeout(() => {
          resetForm();
        }, 2000);
        Swal.fire( 'Se ha enviado su mensaje!', 'Le reponderemos a su mail en las siguientes 48hs','success'
        );
      } catch (error) {
        console.error('Error enviando mensaje', error);
        Swal.fire('Error','Error al enviar el mensaje. Por favor, inténtelo nuevamente más tarde.','error'
        );}
    } else {
      Swal.fire('Oops!', 'Por favor complete todos los campos', 'error');
    }
  };

  return (
    <Container>
      <div className="ContactoHead">
        <h1 className="contactoTitulo">Contactanos !</h1>
        <p className="contactoParrafo">
          Bienvenido/a a nuestra página de contacto. Si tienes alguna pregunta, comentario o sugerencia, por favor no dudes en ponerte en contacto con nosotros a través del formulario de contacto que encontrarás más abajo.
        </p>
      </div>
      <div className="contactoContainer">
        <div className="contactoForm">
          <form ref={formulario} onSubmit={handleSubmit} name="formValue" className="row g-3 needs-validation">
            <ComponenteFormulario label="First name" placeholder="Nombre" name="firstName"  value={formValues.firstName} onChange={handleChange}  />
            <ComponenteFormulario label="Last name" placeholder="Apellido" name="lastName" value={formValues.lastName}  onChange={handleChange} />
            <ComponenteFormulario  label="Correo Electronico" placeholder="Email"  name="mail" value={formValues.mail} onChange={handleChange} />
            <ComponenteFormulario label="Ciudad y Provincia" placeholder="Ciudad"  name="city" value={formValues.city} onChange={handleChange} />
      <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" id="validationFormCheck1" onChange={handleChange} name="terminos" checked={formValues.terminos}/>
        <label className="form-check-label" htmlFor="validationFormCheck1">
          Acepta Terminos y Condiciones</label>
      </div>
      <div className="mb-3">
        <label htmlFor="validationTextarea">Mensaje</label>
        <textarea className="form-control" id="validationTextarea" defaultValue={formValues.mensaje}
        name="mensaje" onChange={handleChange} required ></textarea>
      </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" required >Enviar</button>
  </div>
          </form>
        </div>
        <div className='contactoDatos'><p>Encontranos aca !</p><RedesSociales /></div>
      </div>
    </Container>
  );
};

export default Contacto;
