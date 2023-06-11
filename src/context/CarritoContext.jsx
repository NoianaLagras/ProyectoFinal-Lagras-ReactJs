import React from 'react'
import { createContext ,useState, useEffect} from 'react'
import { toast } from 'react-toastify';

export const CarritoContext = createContext('')
export const CarritoProvider = ({ children }) => {
const [carrito, setCarrito] = useState([]);
const [giveMeTotal, setGiveMeTotal] = useState(0);
const addCarrito = (product) => {

  const productoExistente = carrito.find((producto) => producto.id === product.id);
  if (productoExistente) {
    toast.info('Este producto ya se encuentra en su carrito', {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  } else {
    setCarrito([...carrito, product]);
    toast('🛒 Se ha Agregado este producto al carrito', {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
};
const removeCarrito = (itemId) => {
  const updatedCarrito = carrito.filter((product) => product.id !== itemId);
  setCarrito(updatedCarrito);
};
useEffect(() => {
  const total = carrito.reduce((prev, curr) => prev + curr.cantidad * curr.price, 0);
setGiveMeTotal(total);
}, [carrito]);
const handleCantidadChange = (productId, newCantidad) => {
  if (newCantidad >= 1) {
    const updatedCarrito = carrito.map((product) => {
      if (product.id === productId) {
        const cantidad = Math.min(newCantidad, product.stock);
        return { ...product, cantidad };
      }
      return product;
    });
    setCarrito(updatedCarrito);
  }
};

const value = {
  carrito,
  addCarrito,
  removeCarrito,
  giveMeTotal,
  handleCantidadChange,
};
    return (
    <CarritoContext.Provider value={value}>
       {children}
    </CarritoContext.Provider>
  )
}
