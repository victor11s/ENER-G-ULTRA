import React, { Component } from 'react'
import img1 from '../assets/img/LATASF.png'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'

export default class TarjetaDetalleProducto extends Component {
    render() {
        return (
            <div>
                <Card className='mt-2'>
                    <Container className='p-4'>
                        <Row>
                            <Col>
                                <img class="rounded mx-auto d-block" src={img1} style={{ maxHeight: '30rem' }} alt="..." />
                            </Col>
                            <Col>
                                <Row>
                                    <h1 className='mt-4'>Bebida sabor limon</h1>
                                </Row>
                                <Row>
                                    <p className='mr-6'>Lorem ipsum dolor sit amet. Eum odit omnis ex vero excepturi
                                        vel possimus sint et libero recusandae aut voluptatem quas sit veniam omnis.
                                        Aut deserunt iste vel quaerat aliquam est quidem pariatur id inventore quisquam
                                        et incidunt voluptatem non animi asperiores.</p>
                                </Row>
                                <h2 className='text-danger'>MXN$20</h2>
                                <Form className='mt-3'>
                                    <Row>
                                        <Col className='sm-6 md-2 lg-2' >
                                            <Form.Control type="number" placeholder="1" />
                                        </Col>
                                        <Col>
                                            <Button variant='danger'>Agregar al carrito</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                <Row>
                                    <h3 className='mt-5'>INGREDIENTES</h3>
                                    <Table responsive="sm">

                                        <thead>
                                            <tr>
                                                <th className='justify-content-md-center'>LOREM IPSUM</th>
                                                <th ></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>LOREM IPSUM</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>LOREM IPSUM</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <td>LOREM IPSUM</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </div>
        )
    }
}
