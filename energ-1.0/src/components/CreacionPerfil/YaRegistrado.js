import React, { Component, useState } from 'react'

import { Button, Container, Table, Modal, ModalHeader } from 'react-bootstrap'

import { AiOutlinePlusCircle } from "react-icons/ai";

import { Row, Col } from 'react-bootstrap';

// no lo usamos

function YaRegistrado() {
  //modal de agregar
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)


  const wellStyles = { minWidth: 100 };
  return (
    <Container>
      <div className='mt-5'>
       
        <Modal show={show}>
          <ModalHeader>
            <Modal.Title>
              Agregar Producto
            </Modal.Title>
          </ModalHeader>
          <Modal.Body>
            Ya esta Resgistrado ese usuario
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>



      </div>
    </Container>
  )
}

export default YaRegistrado;
