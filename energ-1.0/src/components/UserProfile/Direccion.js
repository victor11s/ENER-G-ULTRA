import React, { Component, useState } from "react";


import { Card, ListGroup, ListGroupItem, Form, Button, Container, Table, Modal, ModalHeader } from "react-bootstrap";
import DireccionModal from "./DireccionModal";
import InfoPersonalModal from "./InfoPersonalModal";

function Direccion() {



  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)


  return (



    <Container>

      <h2>Dirección</h2>

      <ListGroup>

        <ListGroup.Item className="mt-1"s>Calle:</ListGroup.Item>


      </ListGroup>
      

      <ListGroup horizontal>

        <ListGroup.Item className="mt-2" style={{ width: '50rem' }}>Numero Casa:</ListGroup.Item>
        <ListGroup.Item className="mt-2"style={{ width: '50rem' }}>Codigo Postal:</ListGroup.Item>

      </ListGroup>
      <ListGroup>

        <ListGroup.Item className="mt-2">Colonia:</ListGroup.Item>
        <ListGroup.Item >Ciudad:</ListGroup.Item>
        <ListGroup.Item >Estado:</ListGroup.Item>

      </ListGroup>


      <Button variant="danger" type="submit" className="mt-3" block style={{ width: '5rem' }} onClick={handleShow}>
        Editar
      </Button>



      <Modal show={show}>
        <ModalHeader>
          <Modal.Title>
            Editar Dirección
          </Modal.Title>
        </ModalHeader>
        <Modal.Body>
          <DireccionModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>


    </Container>





  )

}

export default Direccion;