
import React, { Component, useState, useEffect } from 'react'

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'



function AcordionChiquito(props) {

    const pedidosMap = () => {
        console.log(props.pedidos)
        let varPedidos = props.pedidos;
        varPedidos.map((pedido, index) => {
            return (
                <>
                    <h1>pedido: {pedido.numPedido}</h1>
                </>

                // <Accordion.Item eventKey="1">
                //     <Accordion.Header>Num Pedido: {pedido.numPedido}</Accordion.Header>
                //     <Accordion.Body>
                //         <Table striped bordered hover variant="ligth" className='mt-3'>
                //             <thead>
                //                 <tr>
                //                     <th>Producto</th>
                //                     <th>Cantidad</th>

                //                 </tr>
                //             </thead>
                //             <tbody>
                //                 {
                //                     <tr>
                //                         <td>Producto</td>
                //                         <td>Cantidad</td>
                //                     </tr>
                //                 }
                //             </tbody>
                //         </Table>
                //     </Accordion.Body>
                // </Accordion.Item>
            )
        })
    }
    const pedidosNoMap = () => {
        return (
            <Accordion.Item eventKey="1">
                <Accordion.Header>Num Pedido: </Accordion.Header>
                <Accordion.Body>
                    <h1>No hay pedidos</h1>
                    <Table striped bordered hover variant="ligth" className='mt-3'>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr>
                                    <td>Producto</td>
                                    <td>Cantidad</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        )

    }

    return (<div>

        <Container>
            <Accordion defaultActiveKey="0">

                {
                
                
                
                props.pedidos != undefined
                    ? pedidosMap()
                    : pedidosNoMap()

                
                }
                
                
            </Accordion>
        </Container>





    </div>)
}
export default AcordionChiquito;