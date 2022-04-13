import React,{Component} from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'



class Profile extends Component {
    render(){


        return (
            <>
    
                <NavBar />
    
                <Container>
                    <Row>
                        <Col>
                            <Button variant="danger" >Información Personal</Button>
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
    
}
export default Profile;
