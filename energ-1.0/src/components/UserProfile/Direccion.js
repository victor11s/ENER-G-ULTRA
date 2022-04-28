import React, { Component, useState, useEffect } from "react";



import { Card, ListGroup, ListGroupItem, Form, Button, Container, Table, Modal, ModalHeader } from "react-bootstrap";
import DireccionModal from "./DireccionModal";
import InfoPersonalModal from "./InfoPersonalModal";
 
function Direccion(props) {

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)


  return (
    <Container>
      <h2>Dirección</h2>
      <ListGroup>
        <ListGroup.Item className="mt-1">Calle: {props.calle}</ListGroup.Item>
      </ListGroup>

      <ListGroup horizontal>
        <ListGroup.Item className="mt-2" style={{ width: '50rem' }}>Numero Casa: {props.noCasa}</ListGroup.Item>
        <ListGroup.Item className="mt-2"style={{ width: '50rem' }}>Codigo Postal: {props.codigoPostal}</ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item className="mt-2">Colonia: {props.colonia}</ListGroup.Item>
        <ListGroup.Item >Ciudad: {props.ciudad}</ListGroup.Item>
        <ListGroup.Item >Estado: {props.estado}</ListGroup.Item>
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
          <DireccionModal
            calle={props.calle}
            colonia={props.colonia}
            noCasa={props.noCasa}
            codigoPostal={props.codigoPostal}
            ciudad={props.ciudad}
            estado={props.estado}

            setColonia={props.setColonia}
            setCalle={props.setCalle}
            setNumeroCasa={props.setNumeroCasa}
            setCodigoPostal={props.setCodigoPostal}
            setCiudad={props.setCiudad}
            setEstado={props.setEstado}

            idEstado={props.idEstado}
            nombreUsuario={props.nombreUsuario}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose} >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>


    </Container>





  )

}

export default Direccion;