import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {NavLink} from 'react-router-dom'

const DetalleProductos = () => {
  return (
    <div>
        <NavBar/>

          <h1>Aqui van los productos</h1>
          <h2>Eso es todo amigos</h2>

          <h1>Cambio en branch 1 antes de merge main</h1>
          <h2>Eso es todo amigos</h2>
          <h2>Esto fue antes del merge</h2>
          <h3>Prueba pull request</h3>

        <h3>Cambio realizado en main</h3>


        <Footer/>
    </div>
  )
}

export default DetalleProductos