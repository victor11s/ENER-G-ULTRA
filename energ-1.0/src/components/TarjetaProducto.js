import React, { Component } from 'react'
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import img1 from '../assets/img/1.png'
import {NavLink} from './NavComponent'


function TarjetaProducto (props) {
    return (
      <div>
         <Container className="" style={{align: 'center'}}>
           <Row>
            <Col>
            <Card className="mt-5" style={{ width: '18rem' }}>
            <Card.Img className="mt-2 mx-auto" variant="top" src={img1} style={{ width: '4rem'}}/>
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                  {props.descripcion}
                </Card.Text>
                {/* <Container className="" style={{align: 'center'}}> */}
                  <Row>
                    <Col className="d-flex align-items-center">
                      <div >
                        <p><strong>MXN$ {props.precio}</strong></p>
                      </div>
                    </Col>
                    <Col>

                    <Button variant="danger"><NavLink to='/detatalleProducto'>Ver producto</NavLink></Button>

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

