import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Footer from '../Footer'
import NavBar from '../NavBar'
import iniciar from '../../assets/img/user.png'
import "./iniciarSesion.css"

import { Link } from 'react-router-dom'

export default function IniciarSesion() {
    return (
        <>
            <NavBar />
            <Container className='mt-5'>
                <Row>
                    <Col></Col>
                    <Col lg={6} md={6} sm={12} className="text-center mt-5 p-3 justify-content-center ">
                        <img className='iniciarSesion-imagen' src={iniciar} alt="icon" />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Ingrese Correo" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>

                            <Button variant="danger btn-block" type="submit">
                                Iniciar Sesión
                            </Button>
                            <div className='text-right mt-3'>
                                <Button variant="btn btn-link"><Link className='register' to='/registrar'>Registrarse</Link></Button>
                            </div>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Footer />

        </>
    )
}
