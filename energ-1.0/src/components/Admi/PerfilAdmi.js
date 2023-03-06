import React from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';
 
import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'
import TableProductos from './TableProductos';
import InfoPersonalAdmi from './InfoPersonalAdmi'; 
import NavBarAdmi from '../NavBarAdmi';
import PedidosAdmi from './PedidosAdmi';


//Esta página contiene los 2 acordiones del admi, es decir de la tabla de los productos y de los pedidos por usuario
function PerfilAdmi() {
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
                    {/* Sección del accordion para ver los productos registrados: */}
                    <Accordion.Item eventKey="0">
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
                    {/* Sección del accordion para ver los usuarios que tienen pedidos solicitados*/}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Pedidos</Accordion.Header>
                        <Accordion.Body>
                            <PedidosAdmi/>
                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>

            </Container>



            <Footer />


        </>
    )
}
export default PerfilAdmi;
