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
    //States para información importante para confirmar el pedido.
    let { pIdCarrito } = useParams();
    let [sProductos, setProductos] = useState([]);
    let [sIdDireccion, setIdDireccion] = useState(null);
    let [sNombreUsuario, setNombreUsuario] = useState();
    let estadoBoton = '';
    let total = 0;

    useEffect(() => {
        const axiosGet = async () => {
            //Se consultan los productos del carrito a través del API
            await Axios.get('http://localhost:3001/api/getCarrito',
                {
                    params: {
                        idCarrito: pIdCarrito,
                    }
                }).then((response) => {
                    setProductos(response.data); //ya tenemos los productos en el state
                });

            const usuarioString = window.localStorage.getItem("usuario");
            if (usuarioString) {
                const user = JSON.parse(usuarioString);
                setNombreUsuario(user.nombreUsuario);
                //Una vez recuperado el nombre de usuario se consulta su dirección a través del API
                await Axios.get('http://localhost:3001/api/getIdDireccion',
                {
                    params: {
                        nombreUsuario: user.nombreUsuario,
                    }
                }).then((response) => {
                    if(response.data[0]) setIdDireccion(response.data[0].idDireccion);
                });
            }
        }

        axiosGet();
    }, []);

    //Funcion para eliminar el item gráficamente
    const eliminarItem = (id) => {
        const nuevosProductos = sProductos.filter(producto => producto.idProducto != id);
        setProductos(nuevosProductos);
    }

    //Funcion para actualizar la cantidad de un producto en el carrito
    const actualizarCantidad = (id, cantidad) => {
        const nuevosProductos = sProductos.map(producto => {
            if (producto.idProducto = id) producto.cantidad = cantidad;
        });
        setProductos(nuevosProductos);
    }

    //Variable para almacenar la lista de Items en el carrito o en su defecto la leyenda de que no hay productos agregados
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
    } else { //Si sProductos es 0 entonces se muestra esta leyenda.
        productosLista = <h4 className='mt-3'>No hay productos en tu bolsa</h4>
        estadoBoton = 'true';
    }
    return (
        // Se despliegan los productos que estan en el carrito, con su total, ademas de la cantidad de cada uno, pero tambien depende de un map, en caso de que no haya productos se menciona que no hay productos, pero si si , se despliegan
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
                            {/* Aqui se muestran los productos en el carrito o la leyenda de que no hay productos agregados */}
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
                                {/* Boton para hacer el check out: */}
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
