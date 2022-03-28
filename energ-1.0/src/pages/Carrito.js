import React from 'react'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import img1 from '../assets/img/LATASF.png'

import Item from '../components/CarritoProducto/Item'

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
                            <Item/>

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
