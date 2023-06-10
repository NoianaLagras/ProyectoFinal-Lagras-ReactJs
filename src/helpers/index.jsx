export const removeCarrito= (itemId, carrito, setCarrito) => {
    const updatedCarrito = carrito.filter((product) => product.id !== itemId);
    setCarrito(updatedCarrito);
  };
  export const handleCantidadChange = (productId, newCantidad, carrito, setCarrito) => {
    if (newCantidad >= 1) {
      const updatedCarrito = carrito.map((item) => {
        if (item.id === productId) {
          const cantidad = Math.min(newCantidad, item.stock);
          return { ...item, cantidad };
        }
        return item;
      });
      setCarrito(updatedCarrito);
    }
  };

  export function sumar(numero, setNumero) {
    setNumero(numero + 1);
  }
  export function restar(numero, setNumero) {
  setNumero(numero - 1);
}