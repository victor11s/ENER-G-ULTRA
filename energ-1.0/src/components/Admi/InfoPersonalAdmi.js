import React, { Component, useState } from 'react'
import { Button, Form , Container, ListGroup, Modal, ModalHeader} from "react-bootstrap"
import InfoPersonalAdmiModal from './InfoPersonalAdmiModal'

const InfoPersonalAdmi = () => {
  //Maneja la visibilidad del modal para editar información:
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)



  //Esto se encarga de la pantalla de la parte de la direccion de mi perfil admi, donde se pueden visualizar sus datos y editarlos

  return (



    <Container>

      <h2>Perfil</h2>
      <ListGroup>
        <ListGroup.Item>Nombre:</ListGroup.Item>
        <ListGroup.Item>Apellido:</ListGroup.Item>

      </ListGroup>


      <Button 
        variant="danger" 
        type="submit" 
        className="mt-3" 
        block style={{ width: '5rem' }} 
        //Al hacer click se muestra el modal
        onClick={handleShow}>
        Editar
      </Button>


      {/* show es false por defecto: */}
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