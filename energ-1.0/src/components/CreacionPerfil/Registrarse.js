import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Footer from '../Footer'
import NavBar from '../NavBar'
import iniciar from '../../assets/img/user.png'
import "./iniciarSesion.css"

import { Link } from 'react-router-dom'

class Registrarse extends React.Component {

    state =
        {
            form:
            {
                "nombreUsuario": "",
                "contraseña": "",
                "nombre": "",
                "apellido": ""
            },
            error: false,
            errorMsg: ""

        }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = async e => {
        await this.setState({
            form:
            {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    handleBoton()
    {
        console.log("enviado")
    }


    render() {
        return (
            <>
                <NavBar />
                <Container className='mt-5'>
                    <Row>
                        <Col></Col>
                        <Col lg={6} md={6} sm={12} className="text-center mt-5 p-3 justify-content-center ">
                            <img className='iniciarSesion-imagen' src={iniciar} alt="icon" />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Ingrese Correo" name='nombreUsuario' onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Contraseña" name='contraseña' onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="nombreUsuario">
                                    <Form.Control type="email" placeholder="Ingrese Nombre" name='nombre' onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="apellidoUsuario">
                                    <Form.Control type="email" placeholder="Ingrese Apellido" name='apellido' onChange={this.handleChange} />
                                </Form.Group>

                                <Button variant="danger btn-block" type="submit" onClick={this.handleBoton}>
                                    Registrarse
                                </Button>
                                <div className='text-right mt-3'>
                                    <Button  variant="btn btn-link"><Link className='register' to='/iniciarSesion'>Iniciar Sesión</Link></Button>
                                </div>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                <Footer />

            </>
        )
    }

} export default Registrarse;
