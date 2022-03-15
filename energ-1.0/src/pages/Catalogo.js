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
          </Container>
          {/* <TarjetaProducto nombre={producto.nombre}/> */}

          <div >
            <Container>
              <Row className='row d-flex flex-row flex-wrap'>
                {
                  Productos.map(producto => {
                    return (
                      <>
                  
                    <Col  className='row d-flex flex-col flex-wrap md-4 sm-6' >
                      <TarjetaProducto nombre={producto.nombre} precio={producto.precio} />
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