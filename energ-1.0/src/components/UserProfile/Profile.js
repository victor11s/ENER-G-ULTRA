import React from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'



function Profile() {
    return (
        <>

            <NavBar />

            <Container>
                <Row>
                    <Col>
                        <Button variant="danger">Información Personal</Button>
                    </Col>

                    <Col>
                        <Button variant="danger">Direcciones</Button>
                    </Col>

                    <Col>
                        <Button variant="danger">Mis Pedidos</Button>
                    </Col>
                </Row>


            
            </Container>



            <Footer />


        </>
    )
}
export default Profile;
