import React, { Component } from 'react'


import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'

import InformacionPersonal from './InformacionPersonal'
import MisPedidos from './MisPedidos'
import Direccion from './Direccion'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            showHideDemo1: false,
            showHideDemo2: false,
            showHideDemo3: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHideDemo1":
                this.setState({ showHideDemo1: !this.state.showHideDemo1 });
                break;
            case "showHideDemo2":
                this.setState({ showHideDemo2: !this.state.showHideDemo2 });
                break;
            case "showHideDemo3":
                this.setState({ showHideDemo3: !this.state.showHideDemo3 });
                break;
            default:
                
        }
    }


    render() {


        return (
            <>

                <NavBar />

                <Container>
                    <InformacionPersonal/>
                    <Direccion/>
                    <MisPedidos/>

                    <Row>
                        <Col>
                            <Button variant="danger" onClick={() => this.hideComponent("showHideDemo1")} >Información Personal</Button>
                        </Col>

                        <Col>
                            <Button variant="danger" onClick={() => this.hideComponent("showHideDemo2")}>Direcciones</Button>
                        </Col>

                        <Col>
                            <Button variant="danger" onClick={() => this.hideComponent("showHideDemo3")}>Mis Pedidos</Button>
                        </Col>
                    </Row>



                </Container>



                <Footer />


            </>
        )
    }

}
export default Profile;


//https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components