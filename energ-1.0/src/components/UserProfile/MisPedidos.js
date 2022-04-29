import React, { Component } from "react";
import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'
import AccordionPedido from "./AccordionPedido";
import ProductosOrden from "./ProductosOrden";

function MisPedidos(props) {

  return (
    <> 

      <AccordionPedido pedidos={props.pedidos}/>

    </>
  )

}

export default MisPedidos;