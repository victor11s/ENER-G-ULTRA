
import React, { Component, useState, useEffect } from 'react'

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'

import Axios from 'axios';


import TablaProductosPedidosAdmi from './TablaProductosAdmi';
import { NavLink } from 'react-router-dom';

function PedidosIndi(props) {
    let varPedidos = props.pedidos;


    return (<div>

        <Container>
            <Accordion defaultActiveKey="0">
                {

                    varPedidos.map((pedido, index) => {
                        return (
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>Numero de Pedido: {pedido.numPedido}</Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover variant="ligth" className='mt-3'>
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Cantidad</th>

                                            </tr>
                                        </thead>

                                        <TablaProductosPedidosAdmi idCarrito={pedido.idCarrito} />

                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }


            </Accordion>

            <Button className='mx-3 mt-3' variant='danger'>
                <NavLink to={`/perfilAdmi`}> Regresar al Perfil </NavLink>
            </Button>


        </Container>





    </div>)
}
export default PedidosIndi;