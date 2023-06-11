import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Container from './../components/layout/Container';
import { ProductContext } from '../context/ProductContext';
import { CarritoContext } from '../context/CarritoContext';
import { handleChangeCantidad, handleAddCarrito, sumar, restar } from '../helpers/index';

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [numero, setNumero] = useState(1);
  const products = useContext(ProductContext);
  const {addCarrito } = useContext(CarritoContext);

  useEffect(() => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      setProduct(product);
      setCargando(false);
    }, 2000);
  }, [id, products]);

  const [Cargando, setCargando] = useState(true);
  const [product, setProduct] = useState({});

  return (
    Cargando ? (
      <Spinner />
    ) : (
      !product ? (
        <div>
          <h1 className='cargando'>El Producto no ha sido encontrado</h1>
          <button className='addCart' onClick={() => navigate(-1)}>⬅️Volver</button>
        </div>
      ) : (
        <Container>
          <div className='itemDetail'>
            <div className='imgDetail'>
              <img src={product.img} alt={product.name} />
            </div>
            <div className='detalle'>
              <h1 className='nombreProducto'>{product.name}</h1>
              <h4 className='precioDetail'> ${product.price}.00 ARS</h4>
              <div className='stock'>
              <button onClick={() => restar(setNumero)} className='sumaResta' disabled={numero <= 1}>➖</button>
                <input type="number" className='cantidadDetail' value={numero} min={1} max={product.stock} onChange={(e) => handleChangeCantidad(setNumero, product.stock)(e.target.value)} />
                <button onClick={() => sumar(setNumero)} className='sumaResta' disabled={numero >= product.stock}>➕</button>
              </div>
              <p className='stockNum'>stock : {product.stock}</p>
              <button className='botonDetail' onClick={() => handleAddCarrito(product, numero, addCarrito)}>Agregar al Carrito</button>
              <button className='botonDetail' onClick={() => navigate(-1)}>⬅️Volver</button>
            </div>
            <div className='descripcion'>
              <h5>Descripcion del Producto : </h5>
              <p>{product.description}</p>
            </div>
          </div>
        </Container>
      )
    )
  );
}

export default ItemDetail;