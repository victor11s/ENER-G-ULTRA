import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import img1 from '../assets/img/LATASF.png'
import { NavLink } from 'react-router-dom';

import Item from '../components/CarritoProducto/Item'

export default function Carrito() {
    let { pIdCarrito } = useParams();
    let [sProductos, setProductos] = useState([]);
    let [sIdDireccion, setIdDireccion] = useState(null);
    let [sNombreUsuario, setNombreUsuario] = useState();
    let estadoBoton = '';
    let total = 0;


    console.log("Mostrando items del carrito: " + pIdCarrito);
    useEffect(() => {
        const axiosGet = async () => {
            // console.log(pIdCarrito);
            await Axios.get('http://localhost:3001/api/getCarrito',
                {
                    params: {
                        idCarrito: pIdCarrito,
                    }
                }).then((response) => {
                    // console.log(response.data);
                    setProductos(response.data);
                });

            const usuarioString = window.localStorage.getItem("usuario");
            if (usuarioString) {
                const user = JSON.parse(usuarioString);
                setNombreUsuario(user.nombreUsuario);
                await Axios.get('http://localhost:3001/api/getIdDireccion',
                {
                    params: {
                        nombreUsuario: user.nombreUsuario,
                    }
                }).then((response) => {
                    console.log("Se obtuvo la direccion del Usuario: "+user.nombreUsuario+"\n Esta es:");
                    console.log(response.data[0].idDireccion);
                    if(response.data[0]) setIdDireccion(response.data[0].idDireccion);
                });
            }
        }

        axiosGet();
    }, []);

    const eliminarItem = (id) => {
        const nuevosProductos = sProductos.filter(producto => producto.idProducto != id);
        setProductos(nuevosProductos);
        console.log(id);
        console.log(nuevosProductos);
    }
    const actualizarCantidad = (id, cantidad) => {
        const nuevosProductos = sProductos.map(producto => {
            if (producto.idProducto = id) producto.cantidad = cantidad;
        });
        setProductos(nuevosProductos);
        console.log(id);
        console.log(nuevosProductos);
    }
    // console.log(sProductos);
    let productosLista;
    if (sProductos.length > 0) {
        estadoBoton = '';
        productosLista = sProductos.map(producto => {
            total += producto.precio * producto.cantidad;
            return (
                <Item key={producto.idProducto.toString()}
                    id={producto.idProducto}
                    idCarrito={pIdCarrito}
                    nombre={producto.nombre}
                    cantidad={producto.cantidad}
                    precio={producto.precio}
                    stock={producto.stock}
                    eliminarItem={eliminarItem}
                    actualizarCantidad={actualizarCantidad} />

            )
        })
    } else {
        productosLista = <h4 className='mt-3'>No hay productos en tu bolsa</h4>
        estadoBoton = 'true';
    }
    return (
        <>
            <NavBar />
            <Container style={{ maxWidth: "80%" }}>
                <Card className='mt-3 mb-3' body>
                    <Table>
                        <tbody>
                            <tr>
                                <td>
                                    <Row>
                                        <Col className="col-10">
                                            <h1>Carrito</h1>
                                        </Col>
                                        <Col className="col-2">
                                            <h6 className='text-right'>Precio</h6>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            {
                                productosLista
                            }
                        </tbody>

                    </Table>
                    <Form className='mt-3'>
                        <Row>
                            <Col className='sm-6 md-2 lg-2 d-flex justify-content-start'>
                                <h3>Total: MXN ${total}</h3>
                            </Col>
                            <Col className='sm-6 md-2 lg-2 d-flex justify-content-end' >
                                <Button className='mx-3' variant='danger' disabled={estadoBoton}>
                                    <NavLink to={`/checkout/${sNombreUsuario}/${sIdDireccion}/${total}/${pIdCarrito}`}> Proceder pago</NavLink>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
            <Footer />
        </>
    )
}
