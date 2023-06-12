import Swal from 'sweetalert2';
import { db , auth} from '../../firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { calculateTotal } from '../../helpers/index';

export const HandleUserSubmit = async (carrito, setCarrito, opcionEnvio, setOpcionEnvio, user) => {
  const currentUser = auth.currentUser;
  const userId = currentUser ? currentUser.uid : null;
  const formData = user && user.userData ? user.userData : {};

  const orderData = {
    items: carrito,
    opcionEnvio,
    formData,
    total: calculateTotal(carrito, opcionEnvio),
    userId,
  };

  if (carrito.length === 0) {
    Swal.fire('Error', 'Por favor agregue un producto a su carrito', 'error');
  } else if (opcionEnvio === '') {
    Swal.fire('Error', 'Por favor seleccione el tipo de envío o retiro de su compra', 'error');
  } else {
    try {
      await Swal.fire({
        icon: 'info',
        title: 'Estamos procesando su orden de compra',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });

      const col = collection(db, 'orders');
      const order = await addDoc(col, orderData);
      Swal.fire('Su orden de compra se ha enviado correctamente', ' Codigo de orden de compra: ' + order.id, 'success');
      setOpcionEnvio('');
      setCarrito([]);
    } catch (error) {
      console.error('Error enviando orden', error);
      Swal.fire('Error', 'Error al enviar la orden. Por favor, intente nuevamente más tarde.', 'error');
    }
  }
};