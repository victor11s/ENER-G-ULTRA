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

    async function getProducto() {

    }


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
                                    <Col className='sm-6 md-2 lg-2' >
                                        <Form.Control type="number" placeholder="1" />
                                    </Col>
                                    <Col>
                                        <Button variant='danger'>Agregar al carrito</Button>
                                    </Col>
                                </Row>
                            </Form>
                            <Row>
                                <h3 className='mt-5'>INGREDIENTES</h3>
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th className='justify-content-md-center'>Tu bebida {nombre} contiene: </th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            ingredientes.map(ingrediente => {
                                            let ingM = ingrediente.charAt(0).toUpperCase()+ingrediente.slice(1);
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
