import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import img1 from '../assets/img/LATASF.png'
import { NavLink } from 'react-router-dom';

import Item from '../components/CarritoProducto/Item'


// no se usa, se puede usar para futuras implementaciones
//Revisar documentacion completa en Carrito.js
export default function CarritoAdmi() {
    let { pIdCarrito } = useParams();
    let [sProductos, setProductos] = useState([]);
    let estadoBoton = '';
    let total = 0;

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
        }
        axiosGet();
    }, []);

    const eliminarItem = (id) =>{
        const nuevosProductos = sProductos.filter(producto => producto.idProducto != id);
        setProductos(nuevosProductos);
        console.log(id);
        console.log(nuevosProductos);
    }
    const actualizarCantidad = (id, cantidad) =>{
        const nuevosProductos = sProductos.map(producto => {
            if(producto.idProducto=id)producto.cantidad=cantidad;
        });
        setProductos(nuevosProductos);
        console.log(id);
        console.log(nuevosProductos);
    }
    // console.log(sProductos);
    let productosLista; 
    if(sProductos.length>0){
        estadoBoton='';
        productosLista = sProductos.map(producto => {
            total+=producto.precio*producto.cantidad;
            return (
                <Item key={producto.idProducto.toString()} 
                    id={producto.idProducto} 
                    idCarrito= {pIdCarrito}
                    nombre={producto.nombre} 
                    cantidad={producto.cantidad}
                    precio={producto.precio}
                    stock={producto.stock}
                    eliminarItem = {eliminarItem}
                    actualizarCantidad = {actualizarCantidad}/>
                    
            )
        })
    }else{
        productosLista = <h4 className='mt-3'>No hay productos en tu bolsa</h4>
        estadoBoton='true';
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
                                    <NavLink to={`/checkout/${total}`}> Proceder pago</NavLink>
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
