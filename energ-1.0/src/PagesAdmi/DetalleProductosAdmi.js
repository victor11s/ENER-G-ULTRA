import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import TarjetaDetalleProducto from '../components/TarjetaDetalleProducto'
import TarjetaDetalleProductoAdmi from './TarjetaDetalleProductoAdmi'
import { Container, Breadcrumb } from 'react-bootstrap'
import NavBarAdmi from '../components/NavBarAdmi'

//Este componente se muestra al darle click en "ver producto" desde el catálogo
const DetalleProductosAdmi = () => {
  return (
    <div>
      <NavBarAdmi />
      <Container className='mt-2'>
        <Breadcrumb>   
        {/* No se uso Breadcrumb.item por que no deja dar color al link */}
            <li className="breadcrumb-item"><Link className='text-danger' to='/'>Home</Link></li>
            <li className="breadcrumb-item"><Link className='text-danger' to='/catalogo'>Catálogo</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Producto</li>       
        </Breadcrumb>
        {/* Cada detalle de producto contiene una tarjeta con la información del producto: */}
        <TarjetaDetalleProductoAdmi />
      </Container>
      <Footer />
    </div>
  )
}

export default DetalleProductosAdmi