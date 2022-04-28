import React, { Component } from "react";
import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'


import { NavLink } from 'react-router-dom';

class PedidosAdmi extends Component {
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

                            <th>Nombre Usuario</th>
                            <th>Pedidos</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            <tr>
                                <td>Nombre Usuario</td>
                                <td>
                                <Button  className="btn btn-danger ml-5" ><NavLink to={`/pedidosAdmi`} className="d-grid" >Ver Pedidos Usuario</NavLink></Button>
                                </td>
                              
                            </tr>

                        }
                    </tbody>
                </Table>

            </>


        )
    }
}

export default PedidosAdmi;