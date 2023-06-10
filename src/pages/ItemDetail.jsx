import {useState , useEffect, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import  Container  from './../components/layout/Container';
import { ProductContext } from '../context/ProductContext';
import { CarritoContext } from '../context/CarritoContext';
import {sumar , restar} from '../helpers/index'

function ItemDetail() {
   const { id } = useParams(); 
   const navigate = useNavigate()
   const products = useContext(ProductContext)
   const { addCarrito }= useContext(CarritoContext)

   const [numero, setNumero] = useState(1);

useEffect(() => {
  
  setTimeout(() => {
    const product = products.find((p) => p.id === id);
    setProduct(product);
    setCargando(false);
  }, 2000);
}, [id, products]);

const handleChangeCantidad = (e) =>{
  const cantidad = parseInt(e.target.value);
    if (cantidad >= 1 && cantidad <= product.stock){
      setNumero (cantidad)
    }
  }
  
   const handleAddCarrito = () => {
    if (product) {
      const item = { ...product, cantidad: numero }
      addCarrito(item);
    }
  };

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
              <button onClick={restar} className='sumaResta' disabled={numero <= 1}>➖</button>
              <input type="number" className='cantidadDetail'value={numero} min={1} max={product.stock} onChange={handleChangeCantidad}/>
              <button onClick={sumar} className='sumaResta' disabled={numero >= product.stock}>➕</button>
            </div>
            <p className='stockNum'>stock : {product.stock}</p>
            <button className='botonDetail' onClick={handleAddCarrito}>Agregar al Carrito</button>
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