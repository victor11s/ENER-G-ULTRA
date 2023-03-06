import React, { Component, useState, useEffect} from "react";
import  Axios  from "axios";

import { Card, ListGroup, ListGroupItem, Form, Button, Container ,Table, Modal, ModalHeader } from "react-bootstrap";
import InfoPersonalModal from "./InfoPersonalModal";

function InformacionPersonal(props) {

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  
  return (

    <Container>

      <h2 className="text-center">Perfil</h2>
     
      <ListGroup>
        <ListGroup.Item >Nombre: {props.profileNombre}</ListGroup.Item>
        <ListGroup.Item >Apellido: {props.profileApellido}</ListGroup.Item>
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
            <InfoPersonalModal 
              pNombre={props.profileNombre}
              pApellido={props.profileApellido} 
              parentSetNombre={props.profileSetNombre} 
              parentSetApellido={props.profileSetApellido}
              
              handleClose={handleClose}/>
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