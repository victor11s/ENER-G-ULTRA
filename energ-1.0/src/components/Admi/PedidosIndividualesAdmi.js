import React from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'
import TableProductos from './TableProductos';
import InfoPersonalAdmi from './InfoPersonalAdmi';
import NavBarAdmi from '../NavBarAdmi';
import PedidosAdmi from './PedidosAdmi';



function PedidosIndividualesAdmi() {
    return (
        <>

            <NavBarAdmi />
            <Container>
                <Row >
                    <Col></Col>
                    <Col className="text-center"><h2>Administrador</h2></Col>
                    <Col></Col>

                </Row>
                </Container>
            <Container>
                

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Pedidos</Accordion.Header>
                        <Accordion.Body>
                            <PedidosAdmi/>
                        </Accordion.Body>
                    </Accordion.Item>
                    
                   
                </Accordion>



                {/* <Row>
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

                <TableProductos /> */}
            </Container>



            <Footer />


        </>
    )
}
export default PedidosIndividualesAdmi;
