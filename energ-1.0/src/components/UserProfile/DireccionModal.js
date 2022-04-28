import React, { Component, useState } from 'react'
import { Button, Form } from "react-bootstrap"

import Axios from 'axios';



const DireccionModal = (props) => {

    const [sCalle, setCalle] = useState(props.calle);
    const [sColonia, setColonia] = useState(props.colonia);
    const [sNumeroCasa, setNumeroCasa] = useState(props.noCasa);
    const [sCodigoPostal, setCodigoPostal] = useState(props.codigoPostal);
    const [sCiudad, setCiudad] = useState(props.ciudad);
    const [sEstado, setEstado] = useState(props.estado);
    const [sIdEstado, setIdEstado] = useState(props.idEstado);

    const handleBotonConfirmar = async (event) => {
        event.preventDefault();

        Axios.get('http://localhost:3001/api/getDireccion',
            {
                params: {
                    nombreUsuario: props.nombreUsuario,
                }
            }).then((response) => {
                if (response.data[0]) {
                    Axios.put('http://localhost:3001/api/actualizarDireccion',//Actualizar direccion
                        {
                            nombreUsuario: props.nombreUsuario,
                            calle: sCalle,
                            colonia: sColonia,
                            noCasa: sNumeroCasa,
                            codigoPostal: sCodigoPostal,
                            ciudad: sCiudad,
                            idEstado: sIdEstado,
                        }).then((response) => {
                            props.setColonia(sColonia);
                            props.setCalle(sCalle);
                            props.setNumeroCasa(sNumeroCasa);
                            props.setCodigoPostal(sCodigoPostal);
                            props.setCiudad(sCiudad);
                            props.setEstado(sEstado);
                            window.alert("Direccion actualizada :)");
                            props.handleClose();
                        });
                } else {
                    Axios.post('http://localhost:3001/api/agregarDireccion',
                        {
                            nombreUsuario: props.nombreUsuario,
                            calle: sCalle,
                            colonia: sColonia,
                            noCasa: sNumeroCasa,
                            codigoPostal: sCodigoPostal,
                            ciudad: sCiudad,
                            idEstado: sIdEstado,
                        }).then((response) => {
                            props.setColonia(sColonia);
                            props.setCalle(sCalle);
                            props.setNumeroCasa(sNumeroCasa);
                            props.setCodigoPostal(sCodigoPostal);
                            props.setCiudad(sCiudad);
                            props.setEstado(sEstado);
                            window.alert("Direccion insertada :)");
                            props.handleClose();
                        });
                }
            });
    }

    return (
        <Form onSubmit={handleBotonConfirmar}>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Calle"
                    defaultValue={props.calle}
                    onChange={(event) => { setCalle(event.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group className='mt-3'>
                <Form.Control
                    type="text"
                    placeholder="Colonia"
                    defaultValue={props.colonia}
                    onChange={(event) => { setColonia(event.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Ciudad"
                    defaultValue={props.ciudad}
                    onChange={(event) => { setCiudad(event.target.value) }}
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Select aria-label="Default select example"
                    defaultValue={sEstado}
                    onChange={(event) => { 
                        setIdEstado(event.target.value)
                        setEstado(document.getElementById(event.target.value).innerText)
                        console.log(document.getElementById(event.target.value).innerText)
                        }}>
                    <option>Selecciona tu Estado</option>
                    <option id="1" value="1">Nuevo León</option>
                    <option id="2" value="2">Campeche</option>
                    <option id="5" value="5">Tamaulipas</option>
                    <option id="7" value="7">Aguascalientes</option>
                    <option id="8" value="8">Baja California</option>
                    <option id="11" value="11">Chiapas</option>
                    <option id="14" value="14">Chihuahua</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Número Casa"
                    defaultValue={props.noCasa}
                    onChange={(event) => { setNumeroCasa(event.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    defaultValue={props.codigoPostal}
                    type="number"
                    placeholder="Codigo Postal"
                    onChange={(event) => { setCodigoPostal(event.target.value) }}
                    required
                />
            </Form.Group>


            <Button variant="danger" type="submit" className="mt-3" block>
                Guardar
            </Button>

        </Form>
    )
}

export default DireccionModal;