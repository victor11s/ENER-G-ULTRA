import React, { Component } from "react";
import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'
import AccordionPedido from "./AccordionPedido";
import ProductosOrden from "./ProductosOrden";

class MisPedidos extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <>

      <AccordionPedido/>
    

      </>
    )
  }
}

export default MisPedidos;