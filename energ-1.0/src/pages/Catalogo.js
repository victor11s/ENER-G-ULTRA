import React, { Component, useEffect, useState } from 'react'
import Header from "../components/Header";
import FilterBar from '../components/FilterBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

import TarjetaProducto from '../components/TarjetaProducto'
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Productos from '../components/Productos';
import NavBarAdmi from '../components/NavBarAdmi'
import { Nav, FooterBottom, PageContainer, ContentWrap } from '../components/NavComponent'


import Axios from 'axios'

console.log(Productos)



function Catalogo() {
  const [usuario, setUsuario] = useState(null);

  const [productoLista, setProductoLista] = useState([])

  useEffect(() => {
    const usuarioString = window.localStorage.getItem("usuario");
    if (usuarioString) {
      const user = JSON.parse(usuarioString);
      setUsuario(user);//Ya tenemos el usuario
    }

    Axios.get('http://localhost:3001/api/get').then((response) => {
      if (response.data[0]) {
        console.log(response.data);
        setProductoLista(response.data);
      }
    })
  }, [])

  console.log(productoLista);

  return (

    <div>
      <PageContainer>
        <ContentWrap>
          <NavBar />
          <Container className='mt-2'>
            <Breadcrumb>
              {/* No se uso Breadcrumb.item por que no deja dar color al link */}
              <li class="breadcrumb-item"><Link className='text-danger' to='/'>Home</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Catálogo</li>
            </Breadcrumb>
          </Container>
          {/* <FilterBar /> */}

          <div >
            <Container>

              <Row className='row d-flex flex-row flex-wrap'>
                {
                  productoLista.map(producto => {

                    return (
                      <Col className='row d-flex flex-col flex-wrap md-4 sm-6' key={producto.idProducto.toString() + 'b'}>
                        <TarjetaProducto
                          key={producto.idProducto.toString() + 'a'}
                          id={producto.idProducto}
                          nombre={producto.nombre}
                          descripcion={producto.descripcion}
                          precio={producto.precio}
                          usuario={usuario} />
                      </Col>
                    )
                  })
                }
              </Row>
            </Container>

          </div>
        </ContentWrap>
      </PageContainer>
      <Footer />
    </div>
  )

}
export default Catalogo;