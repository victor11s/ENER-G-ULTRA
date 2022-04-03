import React from 'react'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import Axios from 'axios'
import img1 from '../../assets/img/LATASF.png'

export default function (props) {

    let disponibilidad = 'Disponible';
    if (props.stock < 1) {
        disponibilidad = 'No disponible';
    }

    const eliminarItem = (event) => {
        props.eliminarItem(props.id);
        Axios.delete('http://localhost:3001/api/eliminarItem',
            {
                params: {
                    idProducto: props.id,
                    idCarrito: props.idCarrito,
                }

            }).then((response) => {

                console.log(response.data);
                // setProducto(response.data[0]);
            });
        window.location.reload();

    }
    const actualizarCantidadEnter = (event) => {
        if (event.key === "Enter") {
            if (event.target.value != '' && event.target.value > 0 && event.target.value <= 24) {
                props.actualizarCantidad(props.id, event.target.value);
                Axios.put('http://localhost:3001/api/actualizarCantidad',
                    {

                        idProducto: props.id,
                        idCarrito: props.idCarrito,
                        cantidad: event.target.value,

                    }).then((response) => {
                        console.log(response.data);
                        // setProducto(response.data[0]);
                    });
                window.location.reload();
            }
        }
    }
    const actualizarCantidadBlur = (event) => {

        if (event.target.value != '' && event.target.value > 0 && event.target.value <= 24) {
            props.actualizarCantidad(props.id, event.target.value);
            Axios.put('http://localhost:3001/api/actualizarCantidad',
                {

                    idProducto: props.id,
                    idCarrito: props.idCarrito,
                    cantidad: event.target.value,

                }).then((response) => {

                    console.log(response.data);
                    // setProducto(response.data[0]);
                });
            window.location.reload();
        }

    }
    return (
        <tr>
            <td>
                <Row>
                    <Col className='d-flex justify-content-end'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="25" height="25"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                            onClick={eliminarItem}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-2'>
                        <img class="rounded mx-auto d-block" src={img1} style={{ maxHeight: '4rem' }} alt="..." />
                    </Col>
                    <Col className='col-10'>
                        <Row>
                            <Col className="col-10">
                                <h3>{props.nombre}</h3>
                                <p variant='success'>{disponibilidad}</p>
                                <Form className='mt-3' >
                                    <Row>
                                        <Col className='sm-6 md-2 lg-2 d-flex justify-content-start' >
                                            <label style={{ marginRight: "1rem" }}>Cantidad:</label>
                                            {/* <Button className='mx-3' variant='danger' style={{ minWidth: "2rem" }}>-</Button> */}
                                            <Form.Control style={{ maxWidth: "5rem" }}
                                                className="mw-20"
                                                type="number"
                                                defaultValue={props.cantidad}
                                                pattern='^[0-9]+'
                                                min='1' max='24'
                                                onKeyDown={actualizarCantidadEnter}
                                                onBlur={actualizarCantidadBlur} />
                                            {/* <Button className='mx-3' variant='danger' style={{ minWidth: "2rem" }}>+</Button> */}
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                            <Col className="col-2">
                                <h6 className='text-right'>MXN ${props.precio}</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </td>

        </tr>

    )
}
