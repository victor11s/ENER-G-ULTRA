import React, { Component } from 'react'
import Header from "../components/Header";
import FilterBar from '../components/FilterBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

import TarjetaProducto from '../components/TarjetaProducto'
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Productos from '../components/Productos';

console.log(Productos)



export default class Catalogo extends Component {


  render() {

    return (

      <div>
        <NavBar />
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
                Productos.map(producto => {
                  return (
                    <>

                      <Col className='row d-flex flex-col flex-wrap md-4 sm-6' >
                        <TarjetaProducto key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} />
                      </Col>

                    </>
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
}