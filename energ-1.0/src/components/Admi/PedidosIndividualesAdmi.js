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
    //Se extrae el nombre de usuario del que se desplegarán los pedidos desde el params (el link)
    let { nombreUsuario } = useParams();
    //State para almacenar los pedidos
    let [sPedidos, setPedidos] = useState([]);
    useEffect(() => {
        //Funcion para obtener los pedidos dado el nombre de usuario a través del API
        const axiosGetIdCarrito = async () => {
            await Axios.get('http://localhost:3001/api/getPedidos',
                {
                    params: {
                        nombreUsuario: nombreUsuario,
                    }
                }).then((response) => {
                    if (response.data[0]) {
                        let varPedidos = response.data;
                        setPedidos(varPedidos);
                    }
                });

        }
        axiosGetIdCarrito();
    }, []);

    //Aqui se presenta la pestaña donde se ven por persona los pedidos, pero solo se hace el acordion y se le manda la informacion necesaria
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
                        <Accordion.Header>Pedidos de: {nombreUsuario}</Accordion.Header>
                        <Accordion.Body>
                            <PedidosIndi pedidos={sPedidos} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>



            <Footer />


        </>
    )
}
export default PedidosIndividualesAdmi;
