import React, { Component } from "react";
import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'

class ProductosOrden extends Component {
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


                            


                            {/* <th>Imagen</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {


                            <tr>


                                <td>Productos</td>
                                <td>Cantidad</td>




                            </tr>


                        }
                    </tbody>
                </Table>

            </>


        )
    }
}

export default ProductosOrden;