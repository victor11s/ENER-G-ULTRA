
import React, { Component, useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'
import Axios from 'axios';


import TablaProductosPedidosAdmi from './TablaProductosAdmi';
import { NavLink } from 'react-router-dom';

function PedidosIndi(props) {
    //Alamcenamod los pedidos que vienen desde props en una varibale:
    let varPedidos = props.pedidos;



    // En la parte del front lo que se realiza aqui es que por cada pedido que tenga un usuario se realiza un acordion, donde su titulo se muestra el numero de pedido , direccion y en su cuerpo se muestra que prodcutos y cantidades se compraron
    return (<div>

        <Container>
            <Accordion defaultActiveKey="0">
                {
                    //Mapeamos cada pedido y colocamos la información de cada uno en un elemento acordion
                    varPedidos.map((pedido, index) => {
                        return (
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>
                                    Numero de Pedido: {pedido.numPedido}<br />
                                    Direccion: {pedido.calle} #{pedido.noCasa}, {pedido.colonia}, C.P. {pedido.codigoPostal}, {pedido.ciudad}, {pedido.estado}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover variant="ligth" className='mt-3'>
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                                                            </tr>
                                        </thead>
                                        
                                        {/* Creamos una tabla que va a contener los productos que fueron agregados 
                                        al carrito dentro del pedido: */}
                                        <TablaProductosPedidosAdmi idCarrito={pedido.idCarrito} />

                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }


            </Accordion>
                {/*Boton para regresar al perfil, en caso de que ya no se deseen revisar los pedidos*/}
            <Button className='mx-3 mt-3' variant='danger'>
                <NavLink to={`/perfilAdmi`}> Regresar al Perfil </NavLink>
            </Button>


        </Container>





    </div>)
}
export default PedidosIndi;