import {useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import  Container  from './../components/layout/Container';
function ItemDetail() {
   const { id } = useParams(); 
   const navigate = useNavigate()
   const [numero, setNumero] = useState(1);

   const sumar = () => {
      setNumero(numero + 1);
  };
    const restar = () => {
        setNumero(numero - 1);
    };

  const [Cargando, setCargando] = useState(true);
  const [product, setProduct] = useState({});

useEffect(() => {
  setTimeout(() => {
    const products =
    [
        {
            id: "1",
            name: "Anillo Loki",
            price: 1200,
            img: '../assets/images/anillo18.webp',
            cantidad:1,
            stock : 2 ,
            category : "1",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        },
    
        {
            id: "2",
            name: "Anillo LOTR",
            price: 1400,
            img: '../assets/images/anillo9.webp',
            cantidad:1,
            stock : 12 ,
            category : "1",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa pelicula/libro de J. R. R. Tolkien El Señor de los anillos (The Lord of the rings , su titulo original)"
            
        },
    
        {
            id: "3",
            name: "Anillo sol",
            price: 1000,
            img:'../assets/images/anillo1.webp',
            cantidad:1,
            stock : 13 ,
            category : "1",
            description :"Anillo de Oro con forma de Sol "
        },  
    
        {
            id: "4",
            name: "Anillo infinito",
            price: 1200,
            img: '../assets/images/anillo2.webp',
            cantidad:1,
            stock : 8 ,
            category : "1",
            description :"Anillo de plata 925 y detalles en bronce Con Forma de infinito "
        },  
    
         {
            id: "5",
            name: "Anillo LOTR",
            price: 1200,
            img: '../assets/images/anillo2.webp',
            cantidad:1,
            stock : 6 ,
            category : "1",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa pelicula/libro de J. R. R. Tolkien El Señor de los anillos (The Lord of the rings , su titulo original)"
            
        },
    
            {
            id: "6",
            name: "Anillo NORD",
            price: 1300,
            img: '../assets/images/anillo4.webp',
            cantidad:1,
            stock : 9 ,
            category : "1",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , Runas Nordicas"
            
        },
    
          {
            id: "7",
            name: "Anillo diamante",
            price: 1500,
            img: '../assets/images/anillo6.webp',
            cantidad:1,
            stock :4 ,
            category : "1",
            description :"Anillo de plata 925 con diamante "
            
        },  
    
          {
            id: "8",
            name: "Anillo Thanos",
            price: 1800,
            img: '../assets/images/anillo7.webp',
            cantidad:1,
            stock : 6 ,
            category : "1",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        },  
    
          {
            id: "9",
            name: "Collar de corazon",
            price: 1100,
            img: '../assets/images/collar.webp',
            cantidad:1,
            stock : 6 ,
            category : "2",
            description :"Collar de Corazon , cadena de plata 925 y piedra amatista"
        },  
    
          {
            id: "10",
            name: "Anillo Luna",
            price: 1000,
            img: '../assets/images/anillo10.webp',
            cantidad:1,
            stock : 15 ,
            category : "1",
            description :"Anillo de plata 925 Con forma de Luna"
        },
    
        {
            id: "11",
            name: "Collar Luna",
            price: 1700,
            img: '../assets/images/collar1.webp',
            cantidad:1,
            stock : 16 ,
            category : "2",
            description :"Collar con forma de luna en plata "
        },
    
        {
            id: "12",
            name: "Collar de Corazon",
            price: 1100,
            img: '../assets/images/collar2.webp',
            cantidad:1,
            stock : 17 ,
            category : "2",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        },  
    
        {
            id: "13",
            name: "Collar Corazon V",
            price: 2200,
            img: '../assets/images/collar3.webp',
            cantidad:1,
            stock : 3 ,
            category : "2",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        }, 
    
        {
            id: "14",
            name: "Collar ",
            price: 900,
            img: '../assets/images/collar5.webp',
            cantidad:1,
            stock : 2 ,
            category : "2",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        }, 
    
        {
            id: "15",
            name: "Pulsera Chakras",
            price: 800,
            img: '../assets/images/pulsera6.webp',
            cantidad:1,
            stock : 9 ,
            category : "3",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        },  
    
        {
            id: "16",
            name: "Pulsera ByN",
            price: 1200,
            img: '../assets/images/pulsera5.webp',
            cantidad:1,
            stock : 7 ,
            category : "3",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        },
    
        {
            id: "17",
            name: "Pulsera de Corazon",
            price: 1300,
            img: '../assets/images/anillo1.webp',
            cantidad:1,
            stock : 19 ,
            category : "3",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        },  
    
        {
            id: "18",
            name: "Pulsera Nord",
            price: 1200,
            img: '../assets/images/pulsera9.webp',
            cantidad:1,
            stock : 6 ,
            category : "3",
            description :"Anillo de plata 925 tiene un peso aproximado 9 GR , inspirado en la famosa franquicia del Universo cinematografico de Marvel Studio)"
        },
    ];
    const product = products.find((p) => p.id === id);
    setProduct(product);
    setCargando(false);
  }, 2000);
}, [id, product]);

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
              <p className='cantidad'>{numero}</p>
              <button onClick={sumar} className='sumaResta' disabled={numero >= product.stock}>➕</button>
            </div>
            <p className='stockNum'>stock : {product.stock}</p>
            <button className='botonDetail'>Agregar al Carrito</button>
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