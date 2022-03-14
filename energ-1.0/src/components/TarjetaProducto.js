import React, { Component } from 'react'
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import img1 from '../assets/img/1.png'
import {NavLink} from './NavComponent'


function TarjetaProducto (props) {
    return (
      <div>
          <Card className="mt-5" style={{ width: '18rem' }}>
            <Card.Img className="mt-2 mx-auto" variant="top" src={img1} style={{ width: '4rem'}}/>
            <Card.Body>
                <Card.Title>{props.nombre} de prueba</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Container className="" style={{align: 'center'}}>
                  <Row>
                    <Col className="d-flex align-items-center">
                      <div >
                        <p><strong>MXN$ {props.precio}</strong></p>
                      </div>
                      
                    </Col>
                    <Col>
                    <Button variant="danger"><NavLink to='/producto'>Ver producto</NavLink></Button>
                    </Col>
                  </Row>
                </Container>
            </Card.Body>
        </Card></div>
    )
}

export default TarjetaProducto;

