import React, { Component, useEffect, useState } from 'react'
import Header from "../components/Header";
import FilterBar from '../components/FilterBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import NavBarAdmi from '../components/NavBarAdmi';

import TarjetaProducto from '../components/TarjetaProducto'
import TarjetaProductoAdmi from './TarjetaProductoAdmi';
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Productos from '../components/Productos';

import Axios from 'axios'

console.log(Productos)



function CatalogoAdmi() {

  const [productoLista, setProductoLista] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      console.log(response.data);
      setProductoLista(response.data)

    })
  }, [])

  console.log(productoLista);

  return (

    <div>
      <NavBarAdmi />
      <Container className='mt-2'>
        <Breadcrumb>
          {/* No se uso Breadcrumb.item por que no deja dar color al link */}
          <li class="breadcrumb-item"><Link className='text-danger' to='/'>Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Catálogo</li>
        </Breadcrumb>
      </Container>
      <FilterBar />
      {/* <TarjetaProducto nombre={producto.nombre}/> */}

      <div >
        <Container>

          <Row className='row d-flex flex-row flex-wrap'>
            {
              productoLista.map(producto => {
                
                return (
                  <Col className='row d-flex flex-col flex-wrap md-4 sm-6' key={producto.idProducto.toString() + 'b'}>
                    <TarjetaProductoAdmi key={producto.idProducto.toString() + 'a'} id={producto.idProducto} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>

      </div>

      <Footer />
    </div>
  )

}
export default CatalogoAdmi;