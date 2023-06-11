
import { useRef } from 'react';
import { useFormValues } from './ContactoFormValue.jsx';

export const useContactForm = () => {
  const formulario = useRef(null);
  const [formValues, handleChange, resetForm] = useFormValues({
    firstName: '',
    lastName: '',
    city: '',
    mail: '',
    terminos: false,
    mensaje: '',
  });

  return { formulario, formValues, handleChange, resetForm };
};
