export const handleChangeCantidad = (setNumero, stock) => (value) => {
    const cantidad = parseInt(value);
    if (cantidad >= 1 && cantidad <= stock) {
      setNumero(cantidad);
    }
  };

  export const handleAddCarrito = (product, numero, addCarrito) => {

    if (product) {
      const item = { ...product, cantidad: numero };
      addCarrito(item);
    }
  };
  
  export const sumar = (setNumero) => {
    setNumero(prevNumero => prevNumero + 1);
  };
  
  export const restar = (setNumero) => {
    setNumero(prevNumero => prevNumero - 1);
  };
  export const calculateTotal = (carrito, opcionEnvio) => {
    if (!Array.isArray(carrito)) {
      return 0; 
    }
    const subtotal = carrito.reduce((accumulator, item) => accumulator + item.price * item.cantidad, 0);
    opcionEnvio = opcionEnvio ?? 'retiro';
    let total = subtotal;
    switch (opcionEnvio) {
      case 'sucursal':
        total += 1800;
        break;
      case 'domicilio':
        total += 2100;
        break;
      case 'transporte':
        total += 1600;
        break;
      case 'retiro':
        total += 0;
        break;
      default:
        break;
    }
    return total;
  };

  export const handleInputChange = (e, formValues, setFormValues) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  export const validateForm = (formValues) => {
    return (
      formValues.firstName &&
      formValues.lastName &&
      formValues.city &&
      formValues.mail &&
      formValues.terminos &&
      formValues.mensaje
    );
  };