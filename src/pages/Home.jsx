import React from 'react'
import Container from '../components/layout/Container'
import Carousel from '../components/Carrousel/Carousel'
import Saludo from '../components/Saludo'
import Productos from '../components/Productos/Products'
import Slider1 from '../assets/images/AnillosSlider.webp'
import Slider2 from '../assets/images/AnillosSlider1.webp'
import Slider3 from '../assets/images/PulseraSlider1.webp'
const Home = () => {
  return (
    <div>
        <Container>
            <Carousel image1={Slider1} image2={Slider2} image3={Slider3} />
            <Saludo greeting="Bienvenidos a mi Tienda Web!!"/>
            <Productos/>
        </Container>
    </div>
  )
}

export default Home