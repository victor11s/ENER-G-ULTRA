import React, { Component, useState } from "react";


import { Card, ListGroup, ListGroupItem, Form, Button, Container ,Table, Modal, ModalHeader } from "react-bootstrap";
import InfoPersonalModal from "./InfoPersonalModal";

function InformacionPersonal() {



  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)


  return (



    <Container>

      <h2>Perfil</h2>
      <ListGroup>
        <ListGroup.Item>Nombre:</ListGroup.Item>
        <ListGroup.Item>Apellido:</ListGroup.Item>

        <h2>Fecha Nacimento</h2>

        <ListGroup horizontal>


          <ListGroup.Item style={{ width: '25rem' }}>Día:</ListGroup.Item>
          <ListGroup.Item style={{ width: '25rem' }}>Mes:</ListGroup.Item>
          <ListGroup.Item style={{ width: '25rem' }}>Año:</ListGroup.Item>
        </ListGroup>
      </ListGroup>


      <Button variant="danger" type="submit" className="mt-3" block style={{ width: '5rem' }} onClick={handleShow}>
        Editar
      </Button>



      <Modal show={show}>
          <ModalHeader>
            <Modal.Title>
              Editar Información
            </Modal.Title>
          </ModalHeader>
          <Modal.Body>
            <InfoPersonalModal />
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

export default InformacionPersonal;