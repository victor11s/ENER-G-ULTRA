import React from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'
import TableProductos from './TableProductos';
import InfoPersonalAdmi from './InfoPersonalAdmi';



function PerfilAdmi() {
    return (
        <>

            <NavBar />
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
                        <Accordion.Header>Informacion Personal</Accordion.Header>
                        <Accordion.Body>
                            <InfoPersonalAdmi/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Productos</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                            <Col ></Col>
                            <Col className="text-center"><h4>Inserte sus productos</h4></Col>
                            <Col ></Col>
                            </Row>
                            <TableProductos/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Pedidos</Accordion.Header>
                        <Accordion.Body>
                            Inserte Info de los Pedidos
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
export default PerfilAdmi;
