import React, { Component, useState, useEffect } from 'react'

import Axios from 'axios'

import NavBar from '../NavBar';
import Footer from '../Footer';

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'

import InformacionPersonal from './InformacionPersonal'
import MisPedidos from './MisPedidos'
import Direccion from './Direccion'

function Profile() {
    const [sNombreUsuario, setNombreUsuario] = useState();
    const [sNombre, setNombre] = useState();
    const [sApellido, setApellido] = useState();

    const [sCalle, setCalle] = useState();
    const [sColonia, setColonia] = useState();
    const [sNumeroCasa, setNumeroCasa] = useState();
    const [sCodigoPostal, setCodigoPostal] = useState();
    const [sCiudad, setCiudad] = useState();
    const [sEstado, setEstado] = useState();
    const [sIdEstado, setIdEstado] = useState();

    let [sPedidos, setPedidos] = useState([]);

    useEffect(() => {
        const usuarioString = window.localStorage.getItem("usuario");
        if (usuarioString) {
            const axiosGetIdCarrito = async () => {
                const user = JSON.parse(usuarioString);
                setNombre(user.nombre);//Ya tenemos el nombre del usuario
                setApellido(user.apellido);
                setNombreUsuario(user.nombreUsuario);
                let varNombreUsuario = user.nombreUsuario;
                console.log("Profile del usuario: " + varNombreUsuario);

                await Axios.get('http://localhost:3001/api/getDireccion',
                    {
                        params: {
                            nombreUsuario: varNombreUsuario,
                        }
                    }).then(async (response) => {
                        console.log("dirección del usuario: " + user.nombreUsuario);
                        if (response.data[0]) {
                            console.log(response.data[0])
                            let direccion = response.data[0];
                            setColonia(direccion.colonia);
                            setCalle(direccion.calle);
                            setNumeroCasa(direccion.noCasa);
                            setCodigoPostal(direccion.codigoPostal);
                            setCiudad(direccion.ciudad);
                            setEstado(direccion.estado);
                            setIdEstado(direccion.idEstado); 
                        }

                    });
                await Axios.get('http://localhost:3001/api/getPedidos',
                    {
                        params: {
                            nombreUsuario: varNombreUsuario,
                        }
                    }).then((response) => {
                        console.log("Pedidos del usuario: " + user.nombreUsuario + "\nLos pedidos son: ");
                        if (response.data[0]) {
                            console.log(response.data);
                            let varPedidos = response.data;
                            setPedidos(varPedidos);
                        }
                    });

            }
            axiosGetIdCarrito();
        }
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <Row >
                    <Col></Col>
                    <Col className="text-center"><h2>Mi Perfil</h2></Col>
                    <Col>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >Información Personal</Accordion.Header>
                        <Accordion.Body>
                            <InformacionPersonal
                                profileNombre={sNombre}
                                profileApellido={sApellido}
                                profileSetNombre={setNombre}
                                profileSetApellido={setApellido} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Dirección</Accordion.Header>
                        <Accordion.Body>
                            <Direccion
                                calle={sCalle}
                                colonia={sColonia}
                                noCasa={sNumeroCasa}
                                codigoPostal={sCodigoPostal}
                                ciudad={sCiudad}
                                estado={sEstado}

                                setColonia={setColonia}
                                setCalle={setCalle}
                                setNumeroCasa={setNumeroCasa}
                                setCodigoPostal={setCodigoPostal}
                                setCiudad={setCiudad}
                                setEstado={setEstado}

                                idEstado={sIdEstado}
                                nombreUsuario={sNombreUsuario}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Mis Pedidos</Accordion.Header>
                        <Accordion.Body>


                            <MisPedidos pedidos={sPedidos} />





                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>
            <Footer />
        </>
    )

}
export default Profile;


//https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components