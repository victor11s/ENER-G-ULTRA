import React, { Component } from 'react'
import Header from "../components/Header";
import FilterBar from '../components/FilterBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

import TarjetaProducto from '../components/TarjetaProducto'
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Productos from '../components/Productos';

console.log(Productos)



export default class Catalogo extends Component {


  render() {

    return (

      <div>
        <NavBar />
        <Container className='alig-items-center'>
          <FilterBar />
          {/* <TarjetaProducto nombre={producto.nombre}/> */}

          <div >
            {
              Productos.map(producto => {
                return (
                  <Row className='row d-flex flex-row flex-wrap'>

                    <Col md={4} className='row d-flex flex-col flex-wrap'>
                      <TarjetaProducto nombre={producto.nombre} precio={producto.precio} />
                    </Col>

                  </Row>
                )
              })
            }

          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}