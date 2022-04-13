import React from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import TableProductos from './TableProductos';



function PerfilAdmi() {
    return (
        <>

            <NavBar/>
            <Container>
                <Row>
                    <Col>
                        <Button variant="danger" >Información Personal</Button>
                    </Col>

                    <Col>
                        <Button variant="danger">Productos</Button>
                    </Col>

                    <Col>
                        <Button variant="danger">Pedidos</Button>
                    </Col>
                </Row>

                <TableProductos/>
            </Container>



            <Footer />


        </>
    )
}
export default PerfilAdmi;
