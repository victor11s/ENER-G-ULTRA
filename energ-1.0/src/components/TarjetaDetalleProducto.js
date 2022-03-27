import React, { useEffect, useState } from 'react'
import img1 from '../assets/img/LATASF.png'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import ImageGallery from './ImageGallery'
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function TarjetaDetalleProducto() {
    let { id, nombre } = useParams();
    const [producto, setProducto] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {
        const axiosGet = async () => {
            console.log(id);
            await Axios.get('http://localhost:3001/api/getProducto',
                {
                    params: {
                        idProducto: id,
                    }
                }).then((response) => {
                    // console.log(response.data);
                    setProducto(response.data[0]);
                    let ing = response.data[0].ingredientes;
                    let ings = ing.split('\,');
                    setIngredientes(ings);
                });
        }
        axiosGet();
    }, []);

    console.log(producto);
    console.log(ingredientes);

    // console.log(ingredientes);

    return (
        <div>
            <Card className='mt-2'>
                <Container className='p-4'>
                    <Row>
                        <Col>
                            <ImageGallery />
                        </Col>
                        <Col>
                            <Row>
                                <h1 className='mt-4'>{nombre}</h1>
                            </Row>
                            <Row>
                                <p className='mr-6'>{producto.descripcion}</p>
                            </Row>
                            <h2 className='text-danger'>MXN ${producto.precio}</h2>
                            <Form className='mt-3'>
                                <Row>
                                    <Col className='sm-6 md-2 lg-2 d-flex justify-content-start' >
                                        <Form.Control style={{ maxWidth: "5rem" }} className="mw-20" type="number" defaultValue="1" pattern='^[0-9]+' min='1' />
                                        <Button className='mx-3' variant='danger'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>     Agregar al carrito
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                            <Row>
                                <h3 className='mt-5'>INGREDIENTES</h3>
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th className='justify-content-md-center'>TU BEBIDA {nombre} CONTIENE: </th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            ingredientes.map(ingrediente => {
                                                let ingM = ingrediente.trim()
                                                ingM = ingM.charAt(0).toUpperCase() + ingM.slice(1);
                                                return (
                                                    <tr key={ingrediente.toString() + 'a'}>
                                                        <td key={ingrediente.toString() + 'b'}>{ingM}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}
export default TarjetaDetalleProducto;
