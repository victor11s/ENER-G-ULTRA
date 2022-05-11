import { Container, Row, Col, Button, Form, Modal, ModalHeader } from 'react-bootstrap'
import Footer from '../Footer'
import NavBar from '../NavBar'
import iniciar from '../../assets/img/user.png'
import Axios from 'axios'
import "./iniciarSesion.css"
import YaRegistrado from './YaRegistrado'
import md5 from 'md5'


import React, { Component, useState } from 'react'

import { Link } from 'react-router-dom'

class Registrarse extends React.Component {
    //State para almacenar la información del usuario a registrar
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
    
    handleChange = async event => {
        await this.setState({
            form:
            {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
        console.log(this.state.form);
    }



    handleBoton = () => {
        console.log(this.state.form);
        Axios.get('http://localhost:3001/api/consultarUsuario',
            {
                params: {
                    nombreUsuario: this.state.form.nombreUsuario,
                }
            }).then((response) => {
                if (response.data[0]) {

                    alert('Nombre Usuario tomado, selecciona otro Usuario');

                    console.log("Handle Modal:");
                    console.log(response.data);

                } else {

                    Axios.post('http://localhost:3001/api/agregarUsuario',
                        {
                            nombreUsuario: this.state.form.nombreUsuario,
                            contraseña: md5(this.state.form.contraseña),
                            nombre: this.state.form.nombre,
                            apellido: this.state.form.apellido,
                        }).then((response) => {
                            console.log(response.data);
                            console.log("enviado");
                            alert('Usuario Creado');
                            Axios.post('http://localhost:3001/api/agregarNuevoCarrito',
                                {
                                    nombreUsuario: this.state.form.nombreUsuario,
                                }).then((response) => {
                                    console.log(response.data);
                                    console.log("Carrito creado");
                                });

                        });
                }
            });
    }



    render() {

// Se muestra prestaña de resgitrarse donde se le pide al usuario insertar su informacion de registro como nombre, correo, contraseña, correo

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
                                    <Form.Control type="text" placeholder="Ingrese Nombre" name='nombre' onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="apellidoUsuario">
                                    <Form.Control type="text" placeholder="Ingrese Apellido" name='apellido' onChange={this.handleChange} />
                                </Form.Group>
                                {/*Aqui se le da clicl para poder resgistrarse*/}
                                <Button variant="danger btn-block" type="submit" onClick={this.handleBoton}>
                                    Registrarse
                                </Button>
                                <div className='text-right mt-3'>
                                     {/*Aqui se le da click para redirigisre a la pestaña de iniciar sesion, si es que ya se tiene cuenta*/}
                                    <Button variant="btn btn-link"><Link className='register' to='/iniciarSesion'>Iniciar Sesión</Link></Button>
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
