import React, { Component } from 'react'

import { Button, Container, Table } from 'react-bootstrap'

import { AiOutlinePlusCircle} from "react-icons/ai";

import { Row, Col } from 'react-bootstrap';

import ModalProducto from './ModalProducto';




function TableProductos() {

  const wellStyles = { minWidth: 100 };
  return (
    <Container>
    <div className='mt-5'>
      <Row className='mw-50'>
        <Col>
        <Button href={<ModalProducto/>} className="btn btn-danger mt-4 " size="lg" style={{width:85}} ><AiOutlinePlusCircle/></Button>
        </Col>
      
      </Row>
       
      <Table striped bordered hover variant="ligth" className='mt-3'>
        <thead>
          <tr>
            
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Ingredientes</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href="" class="btn btn-outline-info">Editar</a>
              <a href="" class="btn btn-outline-danger">Borrar</a>
            </td>
          </tr>
         

        </tbody>
      </Table>
    </div>
    </Container>
  )
}

export default TableProductos;
