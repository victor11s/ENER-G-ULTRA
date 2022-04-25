import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Footer from '../Footer'
import NavBar from '../NavBar'
import iniciar from '../../assets/img/user.png'
import Axios from 'axios'
import md5 from 'md5'
import "./iniciarSesion.css"

import { Link } from 'react-router-dom'

class IniciarSesion extends React.Component {

    state =
        {
            form:
            {
                "nombreUsuario": "",
                "contrasena": "",
                "nombre": "",
                "apellido": ""
            },
            error: false,
            errorMsg: ""

        } 

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.form.nombreUsuario);
        await Axios.get('http://localhost:3001/api/verificarUsuario',
            {
                params: {
                    nombreUsuario: this.state.form.nombreUsuario,
                }
            }).then((response) => {
                if(response.data[0]){
                    let contrasena = response.data[0].contraseña;
                    let sContrasena = md5(this.state.form.contrasena)

                    // if(contrasena==md5(this.state.form.contrasena)){
                    if(contrasena == sContrasena){
                        alert("eres tuuuu")
                        this.props.pSetUsuario(response.data[0]);
                        this.props.pTipoUsuario(response.data[0].tipo);
                    }else{
                        alert("No eres tu")
                    }
                }
                console.log(response.data);
            });
    }

    handleChange = async e => {
        await this.setState({
            form:
            {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
        console.log(this.state.form);
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
                                    <Form.Control type="email" 
                                        placeholder="Ingrese Correo" 
                                        name='nombreUsuario' 
                                        onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword" >
                                    <Form.Control type="password" 
                                    placeholder="Contraseña" 
                                    name='contrasena' 
                                    onChange={this.handleChange}/>
                                </Form.Group>

                                <Button variant="danger btn-block" type="submit">
                                    Iniciar Sesión
                                </Button>
                                <div className='text-right mt-3'>
                                    <Button variant="btn btn-link"><Link className='register' to='/registrar'>Registrarse</Link></Button>
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


} export default IniciarSesion;
