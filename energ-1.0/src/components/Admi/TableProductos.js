import React, { Component, useEffect, useState } from 'react'
import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Row, Col } from 'react-bootstrap'; 
import EditModal from './EditModal';
import FormModal from './FormModal';
import Axios from 'axios';

function TableProductos() {
  //modal de agregar producto:
  const [show, setShow] = useState(false)

  //Handle Show/Close del modal añadir producto:
  const handleShow = () => setShow(true)

  const handleClose = () => setShow(false)

  //modal de editar:
  const [show2, setShow2] = useState(false)

  //Handle Show/Close del modal editar producto:
  const handleShow2 = (event) => {
    setThisIdProducto(event.target.value);//Cambia el state del producto de interes para el modal
    setShow2(true)
  }

  const handleClose2 = () => setShow2(false)

  //modal de borrar:
  const [show3, setShow3] = useState(false)

  //Handle Show del modal borrar producto 
  const handleShow3 = (event) => {
    setThisIdProducto(event.target.value);//Cambia el state del producto de interes para el modal
    setShow3(true);
  }

  //Handle Close del modal borrar producto cuando se confirma el borrado
  const handleClose3Aceptar = () => {

    Axios.delete('http://localhost:3001/api/eliminarProducto',
      {
        params: {
          idProducto: thisIdProducto,
        }
      }).then((response) => {
        console.log(response.data);
        eliminarItem(thisIdProducto);
        alert('Producto eliminado');
      });
    setShow3(false)
  }

  //Función para eliminar el producto borrado de la interfaz gráfica
  const eliminarItem = (id) => {
    const nuevosProductos = productoLista.filter(producto => producto.idProducto != id);
    setProductoLista(nuevosProductos);
  }

  //Handle Show/Close del modal borrar producto cuando se cancela el borrado
  const handleClose3 = () => setShow3(false)

  //Productos en la tienda:
  const [productoLista, setProductoLista] = useState([])

  //Produdcto a editar/borrar:
  const [thisIdProducto, setThisIdProducto] = useState("1");

  //Recuperar todos los productos de la BD:
  useEffect(() => {

    Axios.get('http://localhost:3001/api/get').then((response) => {
      setProductoLista(response.data)
    })
  }, []);

  //Para prevenir que la ventana se recargue
  const prevenirReload = (event) => {
    event.preventDefault()
  };

  const wellStyles = { minWidth: 100 };
  

  //Aqui se crea la tabla de cada producto en el inventario, con sus respectivas opciones de editar y borrar, ademas de poder agregar un porducto con un boton con un simbolo de +
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
              <th>Opciones</th>
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
            <EditModal idProducto={thisIdProducto} />
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
            <Button variant='danger' style={{ width: 75 }} onClick={handleClose3Aceptar}>
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
