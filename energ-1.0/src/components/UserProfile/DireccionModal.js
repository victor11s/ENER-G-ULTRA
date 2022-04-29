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
                    <option id="15" value="15">Coahuila</option>
                    <option id="18" value="18">Colima</option>
                    <option id="19" value="19">CDMX</option>
                    <option id="20" value="20">Durango</option>
                    <option id="21" value="21">Guanajuato</option>
                    <option id="22" value="22">Guerrero</option>
                    <option id="23" value="23">Hidalgo</option>
                    <option id="24" value="24">Jalisco</option>
                    <option id="25" value="25">Michoacan</option>
                    <option id="26" value="26">Morelos</option>
                    <option id="27" value="27">Nayarit</option>
                    <option id="28" value="28">Oaxaca</option>
                    <option id="29" value="29">Puebla</option>
                    <option id="30" value="30">Querétaro</option>
                    <option id="31" value="31">Quintana Roo</option>
                    <option id="32" value="32">San Luís Potosí</option>
                    <option id="33" value="33">Sinaloa</option>
                    <option id="34" value="34">Sonora</option>
                    <option id="35" value="35">Tabasco</option>
                    <option id="36" value="36">Tamaulipas</option>
                    <option id="37" value="37">Tlaxcala</option>
                    <option id="38" value="38">Veracruz</option>
                    <option id="39" value="39">Yucatán</option>
                    <option id="40" value="40">Zacatecas</option>


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