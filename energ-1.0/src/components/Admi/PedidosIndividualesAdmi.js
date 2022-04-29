import React ,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'
import TableProductos from './TableProductos';
import InfoPersonalAdmi from './InfoPersonalAdmi';
import NavBarAdmi from '../NavBarAdmi';
import PedidosAdmi from './PedidosAdmi';
import PedidosIndi from './PedidosIndi';

import Axios from 'axios';

function PedidosIndividualesAdmi() {
    let { nombreUsuario } = useParams();
    let [sPedidos, setPedidos] = useState([]);

    useEffect(() => {

        const axiosGetIdCarrito = async () => {
            await Axios.get('http://localhost:3001/api/getPedidos',
                {
                    params: {
                        nombreUsuario: nombreUsuario,
                    }
                }).then((response) => {
                    console.log("Pedidos del usuario: " + nombreUsuario + "\nLos pedidos son: ");
                    if (response.data[0]) {
                        console.log(response.data);
                        let varPedidos = response.data;
                        setPedidos(varPedidos);
                    }
                });

        }
        axiosGetIdCarrito();
    }, []);
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
                        <Accordion.Header>Pedidos de :</Accordion.Header>
                        <Accordion.Body>
                            <PedidosIndi pedidos={sPedidos} />
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
