import React from 'react'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import Axios from 'axios'
import img1 from '../../assets/img/LATASF.png'

//props contiene el id del item (producto), la información completa del item en el carrito y el idCarrito
export default function (props) {
    
    //Para señalar la disponibilidad del item
    let disponibilidad = 'Disponible';
    if (props.stock < 1) {
        disponibilidad = 'No disponible';
    }

    const eliminarItem = (event) => {
        //La función desde props ayuda a actualizar la interfaz gráfica
        props.eliminarItem(props.id);
        //Axios request al API para borrar el item del carrito en la BD
        Axios.delete('http://localhost:3001/api/eliminarItem',
            {
                params: {
                    idProducto: props.id,
                    idCarrito: props.idCarrito,
                }
            }).then((response) => {
                console.log(response.data);
            });
        window.location.reload();
    }
    //Función para actualizar la cantidad del producto indicada por el usuario cuando hace enter en el campo correspondiente
    const actualizarCantidadEnter = (event) => {
        if (event.key === "Enter") {
            // Se valida la cantidad ingresada por el usuario
            if (event.target.value != '' && event.target.value > 0 && event.target.value <= 24) {
                //Se actualiza la cantidad del producto en el carrito desde el props
                props.actualizarCantidad(props.id, event.target.value);
                //Se actualiza la cantidad solicitada del producto por el usuario en la BD
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

    //Función para actualizar la cantidad del producto indicada por el usuario cuando hace blur en el campo correspondiente
    const actualizarCantidadBlur = (event) => {
        // Se valida la cantidad ingresada por el usuario
        if (event.target.value != '' && event.target.value > 0 && event.target.value <= 24) {
            //Se actualiza la cantidad del producto en el carrito desde el props
            props.actualizarCantidad(props.id, event.target.value);
            //Se actualiza la cantidad solicitada del producto por el usuario en la BD
            Axios.put('http://localhost:3001/api/actualizarCantidad',
                {

                    idProducto: props.id,
                    idCarrito: props.idCarrito,
                    cantidad: event.target.value,

                }).then((response) => {

                    console.log(response.data);

                });
            window.location.reload();
        }

    }
    return (

        //Aqui se crea cada item dentro del carrito, es decir lo que se agrego, donde se puede modificar su cantidad, ademas de poderse eliminar al momento de darle click en la tacha, esto se hace por cada producto dentro del carrito
        <tr>
            <td>
                <Row>
                    <Col className='d-flex justify-content-end'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="25" height="25"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                            // se agrega evento en el cual al presionar la tachita se borra
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
                                {/*Se obtienen por medio de props los valores de cada producto*/}
                                <h3>{props.nombre}</h3>
                                <p variant='success'>{disponibilidad}</p>
                                <Form className='mt-3' >
                                    <Row>
                                        <Col className='sm-6 md-2 lg-2 d-flex justify-content-start' >
                                            <label style={{ marginRight: "1rem" }}>Cantidad:</label>
                                            <Form.Control style={{ maxWidth: "5rem" }}
                                                className="mw-20"
                                                type="number"
                                                defaultValue={props.cantidad}
                                                pattern='^[0-9]+'
                                                min='1' max='24'
                                                onKeyDown={actualizarCantidadEnter}
                                                onBlur={actualizarCantidadBlur} />
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
