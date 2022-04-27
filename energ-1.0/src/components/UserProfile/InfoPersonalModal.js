import React, { Component, useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import Axios from 'axios';

const InfoPersonalModal = (props) => {

    const [sNombreUsuario, setNombreUsuario] = useState();
    const [sNombre, setNombre] = useState(props.pNombre);
    const [sApellido, setApellido] = useState(props.pApellido);

    useEffect(() => {
        const usuarioString = window.localStorage.getItem("usuario");
        if (usuarioString) {
            const user = JSON.parse(usuarioString);
            setNombreUsuario(user.nombreUsuario);    //Ya tenemos el nombre del usuario
        }
    }, []);

    const handleBotonConfirmar = async (event) => {
        event.preventDefault();
        Axios.put('http://localhost:3001/api/actualizarUsuario',//Actualizar usuario
            {
                nombreUsuario: sNombreUsuario,
                nombre: sNombre,
                apellido: sApellido,
            }).then(async (response) => {
                console.log("Usuario Actualizado: ");
                props.parentSetNombre(sNombre);
                props.parentSetApellido(sApellido);
                alert('Usuario actualizado');

            });
    }

    return (
        <Form onSubmit={handleBotonConfirmar}>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    defaultValue={props.pNombre}
                    onChange={(event) => { setNombre(event.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Apellido"
                    defaultValue={props.pApellido}
                    onChange={(event) => { setApellido(event.target.value) }}
                    rows={3}
                />
            </Form.Group>

            <Button variant="danger" type="submit" className="mt-3" block>
                Guardar
            </Button>

        </Form>
    )
}

export default InfoPersonalModal;