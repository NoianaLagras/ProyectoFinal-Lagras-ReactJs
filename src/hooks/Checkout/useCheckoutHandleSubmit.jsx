import Swal from 'sweetalert2';
import { addDoc, collection } from 'firebase/firestore';
import { calculateTotal } from '../../helpers/index';
import {  db } from '../../firebase.config';

const CheckoutHandleSubmit = async (carrito, setCarrito, opcionEnvio, formValues, setFormValues, formulario, setOpcionEnvio) => {

  const orderData = {
    items: carrito,
    opcionEnvio,
    formData: formValues,
    total: calculateTotal(carrito, opcionEnvio),
  };

  if (formValues.email !== formValues.confirmEmail) {
    Swal.fire('Error', 'Los correos electrónicos no coinciden', 'error');
  } else if (carrito.length === 0) {
    Swal.fire('Error', 'Por favor agregue un producto a su carrito', 'error');
  } else if (opcionEnvio === '') {
    Swal.fire('Error', 'Por favor seleccione el tipo de envío o retiro de su compra', 'error');
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Estamos procesando su orden de compra',
      timer: 4000,
      timerProgressBar: true,
    }).then(async () => {
      try {
        const col = collection(db, 'orders');
        const order = await addDoc(col, orderData);
        Swal.fire('Su orden de compra se ha enviado correctamente', ' Codigo de orden de compra: ' + order.id, 'success');
        setFormValues({
          firstName: '',
          email: '',
          address: '',
          city: '',
          postalCode: '',
        });
        setOpcionEnvio('');
        formulario.current.reset();
        setCarrito([]);
        setTimeout(() => {
          setFormValues({
            firstName: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
          });
        }, 2000);
      } catch (error) {
        console.error('Error enviando orden', error);
        Swal.fire('Error', 'Error al enviar la orden. Por favor, intente nuevamente más tarde.', 'error');
      }
    });
  }
};

export default CheckoutHandleSubmit;