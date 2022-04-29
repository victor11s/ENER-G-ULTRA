import React, { Component, useState, useEffect } from "react";
import { Button, Form, Container, Table, Modal, ModalHeader } from 'react-bootstrap'
import Axios from 'axios';


import { NavLink } from 'react-router-dom';

function PedidosAdmi() {
    const [sUsuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const axiosGetUsuariosPedidos = async () => {
            await Axios.get('http://localhost:3001/api/getUsuariosPedidos')
            .then(async (response) => {
                if (response.data[0]) {
                    console.log("Usuarios con pedidos: " + response.data);
                    setUsuarios(response.data)//Ya tenemos a los usuarios con pedidos
                }

            });
        }
        axiosGetUsuariosPedidos();
    }, []);

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
                        sUsuarios.map((usuario, index) => {
                            return (
                                <tr>
                                    <td>{usuario.nombreUsuario}</td>
                                    <td>
                                        <Button className="btn btn-danger ml-5" ><NavLink to={`/pedidosAdmi/${usuario.nombreUsuario}`} className="d-grid" >Ver Pedidos Usuario</NavLink></Button>
                                    </td>
                                </tr>
                            )
                        })


                    }
                </tbody>
            </Table>

        </>


    )

}

export default PedidosAdmi;