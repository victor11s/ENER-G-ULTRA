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
    
    //State para almacenar la información del usuario a iniciar sesión
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
        //Se verfica que el usuario ingresado coincida con el de la base de datos 
        await Axios.get('http://localhost:3001/api/verificarUsuario',
            {
                params: {
                    nombreUsuario: this.state.form.nombreUsuario,
                }
            }).then(async (response) => {
                if(response.data[0]){
                    let usuario = response.data[0];
                    let contrasena = usuario.contraseña;
                    let sContrasena = md5(this.state.form.contrasena)//La contraseña se encripta con MD5

                    if(contrasena == sContrasena){//Se compara la contraseña ingresada con la de la BD
                        alert("Inicio Sesión con Exito")
                        //Se actualiza la información del usuario en distintos componentes:
                        this.props.pSetUsuario(usuario);
                        window.localStorage.setItem("usuario", JSON.stringify(usuario));
                        await this.props.pTipoUsuario(usuario.tipo);
                        setTimeout(() => {
                            console.log("3 Segundos esperado")
                        }, 3000);
                        //Se redirige a una sección o a otra dependiendo del tipo de usuario
                        (usuario.tipo=="usuario" ?
                        window.location.replace("/")
                        : window.location.replace("/landing"))
                    }else{
                        alert("No se Inicio Sesión, favor de checar sus credenciales")
                    }
                }
                console.log(response.data);
            });
    }
    //Un solo handle para cambiar el state del campo con el valor correspondiente:
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

        // Forms donde se llena la informacion del usuario y la contraseña para hacer el login
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
                                {/* Aqui se le puede dar click y te lleva a la ventana de resgistrarse*/}
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
