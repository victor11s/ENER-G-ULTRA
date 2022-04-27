import React, { Component } from "react";
import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'

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
        <Table striped bordered hover variant="ligth" className='mt-3'>
          <thead>
            <tr>

              <th>numPedido</th>
              <th>Productos</th>
              <th>Cantidad</th>
              <th>Direccion</th>
              
              {/* <th>Imagen</th> */}
              
            </tr>
          </thead>
          <tbody>
            {
    
            
                  <tr>

                    <td>numPedido</td>
                    <td>Productos</td>
                    <td>Cantidad</td>
                    <td>Direccion</td>
                    
                    {/* <td>Imagen</td> */}
                    
                  </tr>
                
              
            }
          </tbody>
        </Table>

      </>


    )
  }
}

export default MisPedidos;