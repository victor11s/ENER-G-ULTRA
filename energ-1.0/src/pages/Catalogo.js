import React, { Component } from 'react'
import Header from "../components/Header";
import FilterBar from '../components/FilterBar';
import NavBar from '../components/NavBar';

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

          <div className='row d-flex flex-row flex-wrap'>
            {
              Productos.map(producto => {
                return (
                  <div >

                    <div className='col-md-4'>
                    <TarjetaProducto nombre={producto.nombre} precio={producto.precio} />
                    </div>

                  </div>
                )
              })
            }

          </div>
        </Container>
      </div>
    )
  }
}