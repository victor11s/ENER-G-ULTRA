import React, { Component, useState } from 'react'

import { Button, Container, Table, Modal, ModalHeader } from 'react-bootstrap'

import { AiOutlinePlusCircle } from "react-icons/ai";

import { Row, Col } from 'react-bootstrap';

import EditModal from './EditModal';

import FormModal from './FormModal';



function TableProductos() {
  //modal de agregar
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  //modal de editar
  const [show2, setShow2] = useState(false)
  const handleShow2 = () => setShow2(true)
  const handleClose2 = () => setShow2(false)
  //modal de borrar
  const [show3, setShow3] = useState(false)
  const handleShow3 = () => setShow3(true)
  const handleClose3 = () => setShow3(false)


  const wellStyles = { minWidth: 100 };
  return (
    <Container>
      <div className='mt-5'>
        <Row className='mw-50'>
          <Col>
            <Button onClick={handleShow} className="btn btn-danger mt-4 " size="lg" style={{ width: 85 }} ><AiOutlinePlusCircle /></Button>
          </Col>

        </Row>

        <Table striped bordered hover variant="ligth" className='mt-3'>
          <thead>
            <tr>

              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Ingredientes</th>
              <th>Imagen</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Imagen</td>
              <td>
                <Button  onClick={handleShow2} className="btn btn-info mr-5" style={{marginRight:5}}>Editar</Button>

                <Button  onClick={handleShow3} className="btn btn-danger ml-5 ">Borrar</Button>
              </td>
            </tr>


          </tbody>
        </Table>

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



        <Modal show={show2}>
          <ModalHeader>
            <Modal.Title>
              Editar Producto
            </Modal.Title>
          </ModalHeader>
          <Modal.Body>
            <EditModal />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose2}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

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
