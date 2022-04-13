import React, { Component } from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'

import InformacionPersonal from './InformacionPersonal'
import MisPedidos from './MisPedidos'
import Direccion from './Direccion'

class Profile extends Component {
    render() {


        return (
            <>

                <NavBar />
                <Container>
                <Row >
                    <Col></Col>
                    <Col className="text-center"><h2>Mi Perfil</h2></Col>
                    <Col></Col>

                </Row>
                </Container>
                

                <Container>
                

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Informacion Personal</Accordion.Header>
                        <Accordion.Body>
                            <InformacionPersonal/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Direccion</Accordion.Header>
                        <Accordion.Body>
                            <Direccion/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Mis Pedidos</Accordion.Header>
                        <Accordion.Body>
                            <MisPedidos/>
                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>



                </Container>



                <Footer />


            </>
        )
    }

}
export default Profile;


//https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components