import React, { Component, useState } from 'react'
import { Button, Form , Container, ListGroup, Modal, ModalHeader} from "react-bootstrap"
import InfoPersonalAdmiModal from './InfoPersonalAdmiModal'

const InfoPersonalAdmi = () => {
    
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)


  return (



    <Container>

      <h2>Perfil</h2>
      <ListGroup>
        <ListGroup.Item>Nombre:</ListGroup.Item>
        <ListGroup.Item>Apellido:</ListGroup.Item>

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
            <InfoPersonalAdmiModal />
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

export default InfoPersonalAdmi;