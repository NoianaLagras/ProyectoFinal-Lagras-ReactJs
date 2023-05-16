import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import  Home from '../pages/Home'
import ItemDetail from '../pages/ItemDetail'
import Medidas from '../pages/Medidas'
import Preguntas from '../pages/Preguntas'
import Contacto from '../pages/Contacto'
import ItemCategory from '../pages/ItemCategory'



const Rutas = () => {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/item/:id' element={<ItemDetail/>}/>
    <Route path='/medidas' element={<Medidas/>}/>
    <Route path='/preguntas' element={<Preguntas/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
    <Route path='/category/:id' element={<ItemCategory/>}/>
    <Route path='*' element={<Error404/>}/>

    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default Rutas