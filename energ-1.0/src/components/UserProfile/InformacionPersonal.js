import React, { Component, useState, useEffect} from "react";
import  Axios  from "axios";

import { Card, ListGroup, ListGroupItem, Form, Button, Container ,Table, Modal, ModalHeader } from "react-bootstrap";
import InfoPersonalModal from "./InfoPersonalModal";

function InformacionPersonal() {



  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const [sNombre, setNombre] = useState();
  const [sApellido, setApellido] = useState();


  useEffect(() => {
    const usuarioString = window.localStorage.getItem("usuario");
    if (usuarioString) {
      const user = JSON.parse(usuarioString);
      setNombre(user.nombre);//Ya tenemos el nombre del usuario
      setApellido(user.apellido);
    }
  }, []);
  return (


 
    <Container>

      <h2>Perfil</h2>
      <ListGroup>
        <ListGroup.Item >Nombre: {sNombre}</ListGroup.Item>
        <ListGroup.Item >Apellido: {sApellido}</ListGroup.Item>

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
            <InfoPersonalModal pNombre={sNombre} pApellido={sApellido}/>
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