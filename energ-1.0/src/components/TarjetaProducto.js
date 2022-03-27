import React, { Component } from 'react'
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';

import img1 from '../assets/img/LATASF.png'

import { NavLink } from './NavComponent'



function TarjetaProducto(props) {
  

  return (
    <div>
      <Container className="" style={{ align: 'center' }}>
        <Row>
          <Col>
            <Card className="mt-5 p-2" style={{ width: '18rem' }}>
              <Card.Img className="mt-2 mx-auto" variant="top" src={img1} style={{ width: '12rem' }} />
              <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                  {props.descripcion}
                </Card.Text>
                {/* <Container className="" style={{align: 'center'}}> */}
                <Row>
                  <Col className="d-flex align-items-center">
                    <div >
                      <p><strong>MXN $ {props.precio}</strong></p>
                    </div>
                  </Col>

                  <Col className="d-grid">
                    <Button variant="danger">

                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </Button>

                  </Col>


                </Row>
                <Row>
                  <Col className="mt-2 d-grid" >



                    <Button size="md" variant="dark" >  <NavLink to={`/detalleProducto/${props.id}/${props.nombre}`} className="d-grid" >Ver producto</NavLink></Button>




                  </Col>
                </Row>
                {/* </Container> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TarjetaProducto;

