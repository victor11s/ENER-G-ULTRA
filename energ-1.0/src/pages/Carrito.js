import React from 'react'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import img1 from '../assets/img/LATASF.png'

export default function Carrito() {
    return (
        <>
            <NavBar />
            <Container>
                <Card className='mt-3 mb-3' body>
                    <Table>
                        <tbody>
                            <tr>
                                <td>
                                    <Row>
                                        <Col className="col-10">
                                            <h1>Carrito</h1>
                                        </Col>
                                        <Col className="col-2">
                                            <h6 className='text-right'>Precio</h6>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Row>
                                        <Col className='col-2'>
                                            <img class="rounded mx-auto d-block" src={img1} style={{ maxHeight: '4rem' }} alt="..." />
                                        </Col>
                                        <Col className='col-10'>
                                            <Row>
                                                <Col className="col-10">
                                                    <h3>Producto 1</h3>
                                                    <p variant='success'>Disponible</p>
                                                    <Form className='mt-3'>
                                                        <Row>
                                                            
                                                            <Col className='sm-6 md-2 lg-2 d-flex justify-content-start' >
                                                                Cantidad:  
                                                                <Button className='mx-3' variant='danger' style={{ minWidth: "2rem" }}>-</Button>
                                                                <Form.Control style={{ maxWidth: "5rem" }} className="mw-20" type="number" defaultValue="1" pattern='^[0-9]+' min='1' />
                                                                <Button className='mx-3' variant='danger' style={{ minWidth: "2rem" }}>+</Button>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </Col>
                                                <Col className="col-2">
                                                    <h6 className='text-right'>MXN $10</h6>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </td>

                            </tr>

                        </tbody>

                    </Table>
                    <Form className='mt-3'>
                        <Row>
                            <Col className='sm-6 md-2 lg-2 d-flex justify-content-end' >
                                <Button className='mx-3' variant='danger'>
                                    Proceder pago
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
            <Footer />
        </>
    )
}
