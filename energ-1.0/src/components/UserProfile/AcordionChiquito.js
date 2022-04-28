
import React, { Component , useState, useEffect} from 'react'

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'



function AcordionChiquito() {
    return (<>

        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Num Pedido aqui insertar el numero con props xd</Accordion.Header>
                    <Accordion.Body>
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
            </Accordion>
        </Container>





    </>)
}
export default AcordionChiquito;