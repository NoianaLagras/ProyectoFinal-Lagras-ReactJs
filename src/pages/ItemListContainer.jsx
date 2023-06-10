import React, { Fragment, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel from "../components/Carrousel/Carousel";
import  Container  from '../components/layout/Container';
import Card from '../components/Productos/Card'
import Slider1 from '../assets/images/CollarSlider1.webp'
import Slider2 from '../assets/images/AnillosSlider1.webp'
import Slider3 from '../assets/images/PulseraSlider1.webp'
import  Saludo from '../components/Saludo'
import { ProductContext } from "../context/ProductContext";

    function ItemListContainer() {
      const { id } = useParams();
      const product = useContext(ProductContext)
      const [productosFiltrados, setProductosFiltrados] = useState([]);
    
      useEffect(() => {
        const filteredProducts = id
          ? product.filter((product) => product.category === id)
          : product;
    
        setProductosFiltrados(filteredProducts);
      }, [id]);
   const handleCategoryName = (number) => {

  switch(number){
    case '1':
      return 'Anillos'
      break;
    case '2':
        return 'Collares'
        break;
    case '3':
          return 'Pulseras'
          break;
    default:
      return 'Productos'
  }
   }
  return (
    <Container>
    <div className="productosContainer">
    <Fragment>
    <Carousel image1={Slider1} image2={Slider2} image3={Slider3}/>
    <Saludo greeting='Bienvenidos a la Tienda Web !!'/>
    <h1 className="productosIndex">{handleCategoryName(id)} </h1>
    </Fragment>
      <div className="productos">
        {productosFiltrados.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </div>
  </Container>
  );
}

export default ItemListContainer;