import React, { Component, useEffect, useState } from 'react'

import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'

import { AiOutlinePlusCircle } from "react-icons/ai";

import { Row, Col } from 'react-bootstrap';

import EditModal from './EditModal';

import FormModal from './FormModal';

import Axios from 'axios';



function TableProductos() {
  //modal de agregar
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  //modal de editar
  const [show2, setShow2] = useState(false)
  
  const handleShow2 = (event) => {
    setThisIdProducto(event.target.value);//Cambia el state del producto de interes para el modal
    setShow2(true)
  }

  const handleClose2 = () => setShow2(false)
  //modal de borrar
  const [show3, setShow3] = useState(false)
  const handleShow3 = (event) => {
    setThisIdProducto(event.target.value);//Cambia el state del producto de interes para el modal
    setShow3(true);
  }
  const handleClose3 = () => setShow3(false)

  //Productos en la tienda
  const [productoLista, setProductoLista] = useState([])

  //Produdcto a editar/borrar
  const [thisIdProducto, setThisIdProducto] = useState("1");

  //Recuperar todos los productos de la BD:
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setProductoLista(response.data)
    })
  }, []);


  const prevenirReload = (event) => {
    event.preventDefault()
    // setThisIdProducto(event.target.idProducto.value);
    // console.log("Producto de interes:" + event.target.idProducto.value)
  };


  const wellStyles = { minWidth: 100 };
  return (
    <Container>
      <div className='mt-0'>

        {/* Boton para AÑADIR nuevo producto */}
        <Row className='mw-50'>
          <Col>
            <Button onClick={handleShow} className="btn btn-danger mt-4 " size="lg" style={{ width: 85 }} ><AiOutlinePlusCircle /></Button>
          </Col>

        </Row>

        {/* Tabla de productos */}
        <Table striped bordered hover variant="ligth" className='mt-3'>
          <thead>
            <tr>

              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Ingredientes</th>
              {/* <th>Imagen</th> */}
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {
              productoLista.map(producto => {

                return (
                  <tr>
                    
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.ingredientes}</td>
                    {/* <td>Imagen</td> */}
                    <td>
                    <Form className='mt-3' onSubmit={prevenirReload} show={false}>
                      {/* <Form.Control value={producto.idProducto} name="idProducto" style={{display: 'none'}}/> */}

                      <Button type="submit" onClick={handleShow2} className="btn btn-info mr-5" 
                        style={{ marginRight: 5 }} value={producto.idProducto} >Editar</Button>

                      <Button onClick={handleShow3} className="btn btn-danger ml-5" 
                        value={producto.idProducto}>Borrar</Button>

                    </Form>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        {/* Modal para AÑADIR productos (oculto por default) */}
        <Modal show={show}>
          <ModalHeader>
            <Modal.Title>
              Agregar Producto
            </Modal.Title>
          </ModalHeader>
          <Modal.Body>
            <FormModal />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>


        {/* Modal para EDITAR productos (oculto por default) */}
        <Modal show={show2}>
          <ModalHeader>
            <Modal.Title>
              Editar Producto
            </Modal.Title>
          </ModalHeader>
          <Modal.Body>
            <EditModal idProducto={thisIdProducto}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose2}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal para BORRAR productos (oculto por default) */}
        <Modal show={show3}>
          <ModalHeader>
            <Modal.Title>
              ¿Seguro que deseas Borrar?
            </Modal.Title>
          </ModalHeader>
          <Modal.Footer>
            <Button variant='danger' style={{ width: 75 }} onClick={handleClose3}>
              Sí
            </Button>
            <Button variant='secondary' style={{ width: 75 }} onClick={handleClose3}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  )
}

export default TableProductos;
